"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityUnauthorizedException = void 0;
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../constants/response-messages");
class EntityUnauthorizedException extends common_1.HttpException {
    constructor(message = response_messages_1.Messages.EXCEPTION_UNAUTHORIZED) {
        super(message, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.EntityUnauthorizedException = EntityUnauthorizedException;
//# sourceMappingURL=entity-unauthorized.exception.js.map