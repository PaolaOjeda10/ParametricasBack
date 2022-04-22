import { Injectable } from '@nestjs/common';
import { id } from 'cls-rtracer';
import * as fs from 'fs';
import pino from 'pino';
import { createWriteStream } from 'pino-http-send';
import { multistream } from 'pino-multi-stream';
// import * as pinos from 'pino-std-serializers';

@Injectable()
export class LogService {
  static logsLogstashUrl: string = process.env.LOG_URL || '';
  static logsLogstashToken: string = process.env.LOG_URL_TOKEN || '';
  static logsFilePath: string = process.env.LOG_PATH || '';
  static logsEstandarOut: boolean = process.env.LOG_STD_OUT === 'true';

  static sistemName = process.env.npm_package_name || 'APP';
  static getStream() {
    const streamHttp =
      this.logsLogstashUrl.length > 5
        ? [
            createWriteStream({
              url: this.logsLogstashUrl,
              headers: {
                Authorization: this.logsLogstashToken,
              },
              batchSize: 1,
            }),
          ]
        : [];
    const streamDisk =
      this.logsFilePath.length > 2
        ? [
            {
              stream: fs.createWriteStream(
                `${this.logsFilePath}/${this.sistemName}-out.log`,
              ),
            },
            {
              level: 'error',
              stream: fs.createWriteStream(
                `${this.logsFilePath}/${this.sistemName}-error.log`,
              ),
            },
            {
              level: 'fatal',
              stream: fs.createWriteStream(
                `${this.logsFilePath}/${this.sistemName}-fatal.log`,
              ),
            },
          ]
        : [];
    const streamsEstandar = this.logsEstandarOut
      ? [{ stream: process.stdout }]
      : [];
    return multistream([...streamsEstandar, ...streamDisk, ...streamHttp]);
  }
  static getLoggerConfig() {
    return {
      pinoHttp: this.getPinoHttpConfig(),
    };
  }
  static customSuccessMessage(res) {
    if (res.statusCode <= 304) {
      return `Peticion concluida - ${res.statusCode} ${JSON.stringify(
        res.req.headers,
      )}`;
    }
    return `Peticion concluida - : ${
      res.statusCode
    } Datos de la Peticion: { "headers":"${JSON.stringify(
      res.req.headers,
    )}, "body": ${JSON.stringify(res.req.body)} }`;
  }

  static customErrorMessage(err, res) {
    return `Peticion concluida - ${
      res.statusCode
    } Datos de la Peticion: { "headers":"${JSON.stringify(
      res.req.headers,
    )}, "body": ${JSON.stringify(res.req.body)} }`;
  }

  static customLogLevel(res, err) {
    if (err) {
      if (res.statusCode >= 500) {
        return 'error';
      } else if (res.statusCode > 304 && res.statusCode < 500) {
        return 'warn';
      } else {
        return 'error';
      }
    }
    return 'info';
  }
  static getPinoHttpConfig() {
    return {
      name: this.sistemName,
      genReqId: (req) => {
        return req.id || id();
      },
      serializers: {
        res(reply) {
          return {
            statusCode: reply.statusCode,
          };
        },
        req(request) {
          return {
            method: request.method,
            url: request.url,
          };
        },
      },
      level: 'info',
      prettyPrint:
        this.logsFilePath.length > 2 || this.logsLogstashUrl.length > 5
          ? false
          : true, //false, //process.env.NODE_ENV !== 'production',
      timestamp: pino.stdTimeFunctions.isoTime,
      customLogLevel: this.customLogLevel,
      customSuccessMessage: this.customSuccessMessage,
      customErrorMessage: this.customErrorMessage,
      customAttributeKeys: {
        req: `request`,
        res: `response`,
        err: `error`,
        responseTime: `Tiempo de la transaccion:ms`,
      },
      // install 'pino-pretty' package in order to use the following option
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
      //   process.env.NODE_ENV !== 'production'
      //     ? { target: 'pino-pretty' }
      //     : undefined,
      // useLevelLabels: true,
      // and all the others...
    };
  }
}
