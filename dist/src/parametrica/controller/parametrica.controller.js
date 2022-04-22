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
exports.ParametricaController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const parametrica_service_1 = require("../service/parametrica.service");
let ParametricaController = class ParametricaController extends abstract_controller_dto_1.AbstractController {
    constructor(parametricaService) {
        super();
        this.parametricaService = parametricaService;
    }
    async addCategoria(body, req) {
        const { catalogo, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.parametricaService.createCategoria(catalogo, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllCategoria() {
        const resp = await this.parametricaService.getAllCategoria();
        return this.successList(resp);
    }
    async updateCategoria(body, req) {
        const { id, categoria, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = this.parametricaService.updateCategoria(id, categoria, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteCategoriaById(body, req) {
        const usuarioAuditori = this.getUser(req);
        const resp = await this.parametricaService.deleteCategoria(body.id, body.formulario, usuarioAuditori);
        return this.successDelete(resp);
    }
    async getCatalogo(body) {
        const resp = await this.parametricaService.getCategoriaById(body.id);
        return this.successList(resp);
    }
    async getCategoriaById(body) {
        const resp = await this.parametricaService.getCategoriaById(body.id);
        return this.successList(resp);
    }
    async generar() {
        const resp = await this.parametricaService.generarCsv();
        return this.successCreate(resp);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "addCategoria", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "getAllCategoria", null);
__decorate([
    (0, common_1.Patch)('/updateCatalogo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "updateCategoria", null);
__decorate([
    (0, common_1.Post)('/deleteCatalogo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "deleteCategoriaById", null);
__decorate([
    (0, common_1.Post)('/getCatalogoId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "getCatalogo", null);
__decorate([
    (0, common_1.Post)('/buscarCatalogo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "getCategoriaById", null);
__decorate([
    (0, common_1.Get)('/generarCSV'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParametricaController.prototype, "generar", null);
ParametricaController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('parametrica'),
    __metadata("design:paramtypes", [parametrica_service_1.ParametricaService])
], ParametricaController);
exports.ParametricaController = ParametricaController;
//# sourceMappingURL=parametrica.controller.js.map