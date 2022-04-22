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
exports.CampoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const campos_service_1 = require("../service/campos.service");
let CampoController = class CampoController extends abstract_controller_dto_1.AbstractController {
    constructor(campoService) {
        super();
        this.campoService = campoService;
    }
    async addCampo(body, req) {
        const { formulario, campo } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.campoService.createCampo(campo, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllCampo() {
        const resp = await this.campoService.getAllCampos();
        return this.successList(resp);
    }
    async listarCampos(body) {
        const resp = await this.campoService.listarCampoporSeccion(body.idSeccion);
        return this.successList(resp);
    }
    async getCampoById(body) {
        const resp = await this.campoService.getCampoById(body.id);
        return this.successList(resp);
    }
    async updateCampo(body, req) {
        const { id, campo, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.campoService.updateCampo(id, campo, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteCampo(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.campoService.deleteCampo(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addCampo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "addCampo", null);
__decorate([
    (0, common_1.Get)('/getCampo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "getAllCampo", null);
__decorate([
    (0, common_1.Post)('/listarCampo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "listarCampos", null);
__decorate([
    (0, common_1.Post)('/getCampoId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "getCampoById", null);
__decorate([
    (0, common_1.Patch)('/updateCampo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "updateCampo", null);
__decorate([
    (0, common_1.Post)('/deleteCampo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CampoController.prototype, "deleteCampo", null);
CampoController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('campos'),
    __metadata("design:paramtypes", [campos_service_1.CamposService])
], CampoController);
exports.CampoController = CampoController;
//# sourceMappingURL=campos.controller.js.map