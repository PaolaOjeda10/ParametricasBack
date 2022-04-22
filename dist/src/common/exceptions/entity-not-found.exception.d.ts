import { HttpException } from '@nestjs/common';
import { Messages } from '../constants/response-messages';
export declare class EntityNotFoundException extends HttpException {
    constructor(message?: Messages);
}
