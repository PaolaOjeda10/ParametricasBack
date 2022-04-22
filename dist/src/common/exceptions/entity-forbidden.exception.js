"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityForbiddenException = void 0;
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../constants/response-messages");
class EntityForbiddenException extends common_1.HttpException {
    constructor(message = response_messages_1.Messages.EXCEPTION_FORBIDDEN) {
        super(message, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.EntityForbiddenException = EntityForbiddenException;
//# sourceMappingURL=entity-forbidden.exception.js.map