"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const cls_rtracer_1 = require("cls-rtracer");
const fs = require("fs");
const pino_1 = require("pino");
const pino_http_send_1 = require("pino-http-send");
const pino_multi_stream_1 = require("pino-multi-stream");
let LogService = class LogService {
    static getStream() {
        const streamHttp = this.logsLogstashUrl.length > 5
            ? [
                (0, pino_http_send_1.createWriteStream)({
                    url: this.logsLogstashUrl,
                    headers: {
                        Authorization: this.logsLogstashToken,
                    },
                    batchSize: 1,
                }),
            ]
            : [];
        const streamDisk = this.logsFilePath.length > 2
            ? [
                {
                    stream: fs.createWriteStream(`${this.logsFilePath}/${this.sistemName}-out.log`),
                },
                {
                    level: 'error',
                    stream: fs.createWriteStream(`${this.logsFilePath}/${this.sistemName}-error.log`),
                },
                {
                    level: 'fatal',
                    stream: fs.createWriteStream(`${this.logsFilePath}/${this.sistemName}-fatal.log`),
                },
            ]
            : [];
        const streamsEstandar = this.logsEstandarOut
            ? [{ stream: process.stdout }]
            : [];
        return (0, pino_multi_stream_1.multistream)([...streamsEstandar, ...streamDisk, ...streamHttp]);
    }
    static getLoggerConfig() {
        return {
            pinoHttp: this.getPinoHttpConfig(),
        };
    }
    static customSuccessMessage(res) {
        if (res.statusCode <= 304) {
            return `Peticion concluida - ${res.statusCode} ${JSON.stringify(res.req.headers)}`;
        }
        return `Peticion concluida - : ${res.statusCode} Datos de la Peticion: { "headers":"${JSON.stringify(res.req.headers)}, "body": ${JSON.stringify(res.req.body)} }`;
    }
    static customErrorMessage(err, res) {
        return `Peticion concluida - ${res.statusCode} Datos de la Peticion: { "headers":"${JSON.stringify(res.req.headers)}, "body": ${JSON.stringify(res.req.body)} }`;
    }
    static customLogLevel(res, err) {
        if (err) {
            if (res.statusCode >= 500) {
                return 'error';
            }
            else if (res.statusCode > 304 && res.statusCode < 500) {
                return 'warn';
            }
            else {
                return 'error';
            }
        }
        return 'info';
    }
    static getPinoHttpConfig() {
        return {
            name: this.sistemName,
            genReqId: (req) => {
                return req.id || (0, cls_rtracer_1.id)();
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
            prettyPrint: this.logsFilePath.length > 2 || this.logsLogstashUrl.length > 5
                ? false
                : true,
            timestamp: pino_1.default.stdTimeFunctions.isoTime,
            customLogLevel: this.customLogLevel,
            customSuccessMessage: this.customSuccessMessage,
            customErrorMessage: this.customErrorMessage,
            customAttributeKeys: {
                req: `request`,
                res: `response`,
                err: `error`,
                responseTime: `Tiempo de la transaccion:ms`,
            },
            transport: {
                target: 'pino-pretty',
                options: { colorize: true },
            },
        };
    }
};
LogService.logsLogstashUrl = process.env.LOG_URL || '';
LogService.logsLogstashToken = process.env.LOG_URL_TOKEN || '';
LogService.logsFilePath = process.env.LOG_PATH || '';
LogService.logsEstandarOut = process.env.LOG_STD_OUT === 'true';
LogService.sistemName = process.env.npm_package_name || 'APP';
LogService = __decorate([
    (0, common_1.Injectable)()
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map