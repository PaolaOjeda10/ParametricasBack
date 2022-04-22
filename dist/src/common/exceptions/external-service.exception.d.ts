import { HttpException } from '@nestjs/common';
export declare class ExternalServiceException extends HttpException {
    constructor(service: any, error: any);
}
