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
exports.SeccionController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const seccion_service_1 = require("../service/seccion.service");
let SeccionController = class SeccionController extends abstract_controller_dto_1.AbstractController {
    constructor(seccionService) {
        super();
        this.seccionService = seccionService;
    }
    async addSeccion(body, req) {
        const { seccion, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.seccionService.createSeccion(seccion, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllSeccioon() {
        const resp = await this.seccionService.getAllSeccion();
        return this.successList(resp);
    }
    async getSeccionById(body) {
        const resp = await this.seccionService.getSeccionById(body.id);
        return this.successList(resp);
    }
    async listarSeccines(body) {
        const resp = await this.seccionService.listarSeccionporGrupo(body.idGrupo);
        return this.successList(resp);
    }
    async updateSeccion(body, req) {
        const { id, seccion, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.seccionService.updateSeccion(id, seccion, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteSeccion(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.seccionService.deleteSeccion(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addSeccion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "addSeccion", null);
__decorate([
    (0, common_1.Get)('/getSeccion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "getAllSeccioon", null);
__decorate([
    (0, common_1.Post)('/getSeccionId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "getSeccionById", null);
__decorate([
    (0, common_1.Post)('/listarSecciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "listarSeccines", null);
__decorate([
    (0, common_1.Patch)('/updateSeccion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "updateSeccion", null);
__decorate([
    (0, common_1.Post)('/deleteSeccion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "deleteSeccion", null);
SeccionController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('secciones'),
    __metadata("design:paramtypes", [seccion_service_1.SeccionService])
], SeccionController);
exports.SeccionController = SeccionController;
//# sourceMappingURL=seccion.controller.js.map