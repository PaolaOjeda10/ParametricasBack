"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const entity_not_found_exception_1 = require("../exceptions/entity-not-found.exception");
const entity_unauthorized_exception_1 = require("../exceptions/entity-unauthorized.exception");
const response_messages_1 = require("../constants/response-messages");
const external_service_exception_1 = require("../exceptions/external-service.exception");
const nestjs_pino_1 = require("nestjs-pino");
const entity_forbidden_exception_1 = require("../exceptions/entity-forbidden.exception");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor(logger) {
        this.logger = logger;
        this.logger.setContext(HttpExceptionFilter_1.name);
        HttpExceptionFilter_1.staticLogger = this.logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = exception.getStatus()
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const r = exception.getResponse();
        let errores = [];
        this.logger.error('[error] %o', r);
        if (Array.isArray(r.message)) {
            status = common_1.HttpStatus.BAD_REQUEST;
            const validationErrors = r.message;
            errores = validationErrors;
        }
        const mensaje = this.isBusinessException(exception);
        const errorResponse = {
            finalizado: false,
            codigo: status,
            timestamp: Math.floor(Date.now() / 1000),
            mensaje,
            datos: {
                errores,
            },
        };
        response.status(status).json(errorResponse);
    }
    isBusinessException(exception) {
        if (exception instanceof entity_not_found_exception_1.EntityNotFoundException ||
            exception instanceof entity_unauthorized_exception_1.EntityUnauthorizedException ||
            exception instanceof entity_forbidden_exception_1.EntityForbiddenException ||
            exception instanceof external_service_exception_1.ExternalServiceException) {
            return exception.message;
        }
        else {
            const message = this.filterMessage(exception);
            return message;
        }
    }
    filterMessage(exception) {
        let message;
        switch (exception.constructor) {
            case common_1.BadRequestException:
                message = exception.message || response_messages_1.Messages.EXCEPTION_BAD_REQUEST;
                break;
            case common_1.UnauthorizedException:
                message = response_messages_1.Messages.EXCEPTION_UNAUTHORIZED;
                break;
            case common_1.NotFoundException:
                message = response_messages_1.Messages.EXCEPTION_NOT_FOUND;
                break;
            case common_1.PreconditionFailedException:
                message = exception.message || response_messages_1.Messages.EXCEPTION_PRECONDITION_FAILED;
                break;
            case common_1.ForbiddenException:
                message = response_messages_1.Messages.EXCEPTION_FORBIDDEN;
                break;
            default:
                message = response_messages_1.Messages.EXCEPTION_DEFAULT;
        }
        return message;
    }
};
HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map