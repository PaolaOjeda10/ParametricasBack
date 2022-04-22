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
exports.ArancelesController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const login_interceptor_1 = require("../interceptor/login.interceptor");
const aranceles_service_1 = require("../service/aranceles.service");
let ArancelesController = class ArancelesController extends abstract_controller_dto_1.AbstractController {
    constructor(aranceleService) {
        super();
        this.aranceleService = aranceleService;
    }
    async addArancel(body, req) {
        const { arancel, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.aranceleService.createArancel(arancel, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return this.successCreate(resp);
    }
    async getAllArancel() {
        const resp = await this.aranceleService.getAllArancel();
        return this.successList(resp);
    }
    async listarArancelporIdCatalogoTramite(body) {
        const resp = await this.aranceleService.listarArancelporIdCatalogoTramite(body.idCatalogoTramite);
        return this.successList(resp);
    }
    async getArancelById(body) {
        const resp = await this.aranceleService.getArancel(body.id);
        return this.successList(resp);
    }
    async updateArancel(body, req) {
        const { id, arancel, formulario } = body;
        const usuarioAuditoria = this.getUser(req);
        const resp = this.aranceleService.updateArancel(id, arancel, {
            formulario,
            usuarioAuditoria: usuarioAuditoria,
        });
        return resp;
    }
    async deleteArancel(body, req) {
        const usuarioAuditoria = this.getUser(req);
        const resp = await this.aranceleService.deleteArancel(body.id, body.formulario, usuarioAuditoria);
        return this.successDelete(resp);
    }
};
__decorate([
    (0, common_1.Post)('/addArancel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "addArancel", null);
__decorate([
    (0, common_1.Get)('/getArancel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "getAllArancel", null);
__decorate([
    (0, common_1.Post)('/listarArancelIdCatTramite'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "listarArancelporIdCatalogoTramite", null);
__decorate([
    (0, common_1.Post)('/getArancelId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "getArancelById", null);
__decorate([
    (0, common_1.Patch)('/updateArancel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "updateArancel", null);
__decorate([
    (0, common_1.Post)('/deleteArancel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArancelesController.prototype, "deleteArancel", null);
ArancelesController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(new login_interceptor_1.LoginInterceptor()),
    (0, common_1.Controller)('aranceles'),
    __metadata("design:paramtypes", [aranceles_service_1.ArancelesService])
], ArancelesController);
exports.ArancelesController = ArancelesController;
//# sourceMappingURL=aranceles.controller.js.map