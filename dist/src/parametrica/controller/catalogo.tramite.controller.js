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
exports.CatalogoTramiteController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const catalogo_tramite_service_1 = require("../service/catalogo.tramite.service");
let CatalogoTramiteController = class CatalogoTramiteController extends abstract_controller_dto_1.AbstractController {
    constructor(catalogoTramService) {
        super();
        this.catalogoTramService = catalogoTramService;
    }
    async addCatTramite(body, req) {
        const { catalogoTramite, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.catalogoTramService.createCatalogoTramite(catalogoTramite, { formulario, usuarioAuditoria: usuarioAuditoria });
        return this.successCreate(resp);
    }
    async getDataCatalogoTramite() {
        const resp = await this.catalogoTramService.getAllCatalogoTramiteRelations();
        return this.successList(resp);
    }
    async getAllCatTramite() {
        const resp = await this.catalogoTramService.getAllCatalogoTramite();
        return this.successList(resp);
    }
    async getTramiteById(body) {
        const resp = await this.catalogoTramService.getCatalogoTramiteById(body.id);
        return this.successList(resp);
    }
    async updateCatTramite(body, req) {
        const { id, catTramite, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = this.catalogoTramService.updateCatalogoTramite(id, catTramite, { formulario, usuarioAuditoria: usuarioAuditoria });
        return resp;
    }
    async deleteCatalogoTramite(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.catalogoTramService.deleteCategoriaTramite(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addCatTramite'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "addCatTramite", null);
__decorate([
    (0, common_1.Get)('/getDataCatalogoTramite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "getDataCatalogoTramite", null);
__decorate([
    (0, common_1.Get)('/catTramite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "getAllCatTramite", null);
__decorate([
    (0, common_1.Post)('/getTramiteId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "getTramiteById", null);
__decorate([
    (0, common_1.Patch)('/updateCatalogoTramite'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "updateCatTramite", null);
__decorate([
    (0, common_1.Post)('/deleteCatalogoTramite'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatalogoTramiteController.prototype, "deleteCatalogoTramite", null);
CatalogoTramiteController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('catalogo-tramites'),
    __metadata("design:paramtypes", [catalogo_tramite_service_1.CatalogoTramiteService])
], CatalogoTramiteController);
exports.CatalogoTramiteController = CatalogoTramiteController;
//# sourceMappingURL=catalogo.tramite.controller.js.map