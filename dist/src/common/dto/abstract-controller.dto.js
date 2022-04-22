"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractController = void 0;
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../constants/response-messages");
class AbstractController {
    makeResponse(data, message) {
        return {
            finalizado: true,
            mensaje: message,
            datos: data,
        };
    }
    successList(data, message = response_messages_1.Messages.SUCCESS_LIST) {
        return this.makeResponse(data, message);
    }
    successUpdate(data, message = response_messages_1.Messages.SUCCESS_UPDATE) {
        return this.makeResponse(data, message);
    }
    successDelete(data, message = response_messages_1.Messages.SUCCESS_DELETE) {
        return this.makeResponse(data, message);
    }
    successCreate(data, message = response_messages_1.Messages.SUCCESS_CREATE) {
        return this.makeResponse(data, message);
    }
    successListRows(data, message = response_messages_1.Messages.SUCCESS_LIST) {
        const [filas, total] = data;
        return this.makeResponse({ total, filas }, message);
    }
    getUser(req) {
        var _a;
        if ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id) {
            return req.user.id;
        }
        throw new common_1.BadRequestException(`Es necesario que este autenticado para consumir este recurso.`);
    }
    getAccessTokenCD(req) {
        var _a;
        if ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.accessToken) {
            return req.user.accessToken;
        }
        throw new common_1.BadRequestException(`Es necesario que este autenticado para consumir este recurso.`);
    }
    getUserToken(req) {
        console.log('USER TOken', req.user);
        try {
            return { id: '1' };
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.AbstractController = AbstractController;
//# sourceMappingURL=abstract-controller.dto.js.map