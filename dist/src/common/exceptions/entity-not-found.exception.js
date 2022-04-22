"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundException = void 0;
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../constants/response-messages");
class EntityNotFoundException extends common_1.HttpException {
    constructor(message = response_messages_1.Messages.EXCEPTION_NOT_FOUND) {
        super(message, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=entity-not-found.exception.js.map