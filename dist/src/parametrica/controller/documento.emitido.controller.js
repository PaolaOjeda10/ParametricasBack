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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoEmitidoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const documento_emitido_service_1 = require("../service/documento.emitido.service");
let DocumentoEmitidoController = class DocumentoEmitidoController extends abstract_controller_dto_1.AbstractController {
    constructor(documentoService) {
        super();
        this.documentoService = documentoService;
    }
    async addDocumento(body, req) {
        const { documento, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.documentoService.createDocumentoEmitido(documento, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllDocumentoEmitido() {
        const resp = await this.documentoService.getAllDocumento();
        return this.successList(resp);
    }
    async getDocumentoById(body) {
        const resp = await this.documentoService.getDocumentoEmitido(body.id);
        return this.successList(resp);
    }
    async listarDocumentosEmitidosporCatalogoTramite(body) {
        const resp = await this.documentoService.listarDocumentoporCatalogoTramite(body.idCatalogoTramite);
        return this.successList(resp);
    }
    async updateDocumentoEmitido(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const { id, documento, formulario } = body;
        const resp = this.documentoService.updateDocumentoEmitido(id, documento, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteDocumentoEmitido(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.documentoService.deleteDocumentoEmitido(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addDocumentoEmitido'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "addDocumento", null);
__decorate([
    (0, common_1.Get)('/getDocumentosEmitidos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "getAllDocumentoEmitido", null);
__decorate([
    (0, common_1.Post)('/getDocumentoId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "getDocumentoById", null);
__decorate([
    (0, common_1.Post)('/listarDocumentos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "listarDocumentosEmitidosporCatalogoTramite", null);
__decorate([
    (0, common_1.Patch)('/updateDocumentoEmitido'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "updateDocumentoEmitido", null);
__decorate([
    (0, common_1.Post)('/deleteDocumentoEmitido'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocumentoEmitidoController.prototype, "deleteDocumentoEmitido", null);
DocumentoEmitidoController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('documentos-emitidos'),
    __metadata("design:paramtypes", [documento_emitido_service_1.DocumentoEmitdoService])
], DocumentoEmitidoController);
exports.DocumentoEmitidoController = DocumentoEmitidoController;
//# sourceMappingURL=documento.emitido.controller.js.map