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
exports.GrupoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const grupo_service_1 = require("../service/grupo.service");
let GrupoController = class GrupoController extends abstract_controller_dto_1.AbstractController {
    constructor(grupoService) {
        super();
        this.grupoService = grupoService;
    }
    async addGrupo(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const { grupo, formulario } = body;
        const resp = await this.grupoService.createGrupo(grupo, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllGrupo() {
        const resp = await this.grupoService.getAllGrupo();
        return this.successList(resp);
    }
    async getGrupoById(body) {
        const resp = await this.grupoService.getGrupoById(body.id);
        return this.successList(resp);
    }
    async listarGrupos(body) {
        const resp = await this.grupoService.listarGrupoporCatalogoTramite(body.idCatalogoTramite);
        return this.successList(resp);
    }
    async updateGrupo(body, req) {
        const { id, grupo, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = this.grupoService.updateGrupo(id, grupo, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteGrupo(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.grupoService.deleteGrupo(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
    async getAllGrupoSeccionCampo() {
        const resp = await this.grupoService.getGropowithRelations();
        return this.successList(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addGrupo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "addGrupo", null);
__decorate([
    (0, common_1.Get)('/getGrupo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "getAllGrupo", null);
__decorate([
    (0, common_1.Post)('/getGrupoId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "getGrupoById", null);
__decorate([
    (0, common_1.Post)('/listarGrupo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "listarGrupos", null);
__decorate([
    (0, common_1.Patch)('/updateGrupo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "updateGrupo", null);
__decorate([
    (0, common_1.Post)('/deleteGrupo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "deleteGrupo", null);
__decorate([
    (0, common_1.Get)('/getGSC'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GrupoController.prototype, "getAllGrupoSeccionCampo", null);
GrupoController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('grupos'),
    __metadata("design:paramtypes", [grupo_service_1.GrupoService])
], GrupoController);
exports.GrupoController = GrupoController;
//# sourceMappingURL=grupo.controller.js.map