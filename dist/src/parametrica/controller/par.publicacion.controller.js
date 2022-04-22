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
exports.ParPublicacionController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const par_publicacion_service_1 = require("../service/par.publicacion.service");
let ParPublicacionController = class ParPublicacionController extends abstract_controller_dto_1.AbstractController {
    constructor(parpublicacionService) {
        super();
        this.parpublicacionService = parpublicacionService;
    }
    async addParPublicacion(body, req) {
        const { publicacion, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.parpublicacionService.createParPublicaciones(publicacion, { formulario, usuarioAuditoria: usuarioAuditoria });
        return this.successCreate(resp);
    }
    async getAllParPublicacion() {
        const resp = await this.parpublicacionService.getAllParPublicacion();
        return this.successList(resp);
    }
    async getPublicacionById(body) {
        const resp = await this.parpublicacionService.getParPublicacion(body.id);
        return this.successList(resp);
    }
    async listarParPublicacionporCatalogoTramite(body) {
        const resp = await this.parpublicacionService.listarParPublicacionporCatalogoTramite(body.idCatalogoTramite);
        return this.successList(resp);
    }
    async updateParPublicacion(body, req) {
        const { id, publicacion, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.parpublicacionService.updateParPublicacion(id, publicacion, { formulario, usuarioAuditoria: usuarioAuditoria });
        return resp;
    }
    async deleteParPublicacion(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.parpublicacionService.deleteParPublicacion(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addPublicacion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "addParPublicacion", null);
__decorate([
    (0, common_1.Get)('/getParPublicaciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "getAllParPublicacion", null);
__decorate([
    (0, common_1.Post)('/getPublicacionId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "getPublicacionById", null);
__decorate([
    (0, common_1.Post)('/listarPublicaciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "listarParPublicacionporCatalogoTramite", null);
__decorate([
    (0, common_1.Patch)('/updatePublicacion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "updateParPublicacion", null);
__decorate([
    (0, common_1.Post)('/deletePublicacion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParPublicacionController.prototype, "deleteParPublicacion", null);
ParPublicacionController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('par-publicaciones'),
    __metadata("design:paramtypes", [par_publicacion_service_1.ParPublicacionService])
], ParPublicacionController);
exports.ParPublicacionController = ParPublicacionController;
//# sourceMappingURL=par.publicacion.controller.js.map