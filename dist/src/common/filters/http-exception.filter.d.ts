import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    static staticLogger: PinoLogger;
    constructor(logger: PinoLogger);
    catch(exception: HttpException, host: ArgumentsHost): void;
    isBusinessException(exception: Error): any;
    filterMessage(exception: any): any;
}
