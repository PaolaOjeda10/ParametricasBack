"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalServiceException = void 0;
const common_1 = require("@nestjs/common");
class ExternalServiceException extends common_1.HttpException {
    constructor(service, error) {
        var _a;
        const errorMessage = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error.request || error.message;
        console.error('Error', errorMessage);
        super(`Error: ${service}`, common_1.HttpStatus.FAILED_DEPENDENCY);
    }
}
exports.ExternalServiceException = ExternalServiceException;
//# sourceMappingURL=external-service.exception.js.map