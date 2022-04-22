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
exports.GrupoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const grupo_repository_1 = require("../repositories/grupo.repository");
let GrupoService = class GrupoService {
    constructor(grupoRepository, cambioRepository) {
        this.grupoRepository = grupoRepository;
        this.cambioRepository = cambioRepository;
    }
    async createGrupo(grupo, { formulario, usuarioAuditoria }) {
        try {
            const resp = await this.grupoRepository.createGrupo(grupo);
            formulario.cambio.id = resp.identifiers[0].id;
            if (resp) {
                await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
            }
            return resp;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async listarGrupoporCatalogoTramite(idCatalogoTramite) {
        const resp = await this.grupoRepository.listarGrupoporCatalogoTramite(idCatalogoTramite);
        return resp;
    }
    async updateGrupo(id, grupo, { formulario, usuarioAuditoria }) {
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const gp = await this.grupoRepository.getGrupoById(id);
        if (!gp) {
            throw new common_1.NotFoundException(`Grupo con #${id} no encontrado`);
        }
        const response = await this.grupoRepository.updateGrupo(id, grupo);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async getAllGrupo() {
        return await this.grupoRepository.getAllGrupo();
    }
    async getGrupoById(id) {
        const gp = await this.grupoRepository.getGrupoById(id);
        if (!gp) {
            throw new common_1.NotFoundException(`Grupo con #${id} no encontrado`);
        }
        return gp;
    }
    async deleteGrupo(id, formulario, usuarioAuditoria) {
        const cat = await this.grupoRepository.getGrupoById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Grupo con #${id} no encontrado`);
        }
        const response = await this.grupoRepository.removeGrupo(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
    async getGropowithRelations() {
        return await this.grupoRepository.listarGrupoSeccionCampo();
    }
};
GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grupo_repository_1.GrupoRepository)),
    __metadata("design:paramtypes", [grupo_repository_1.GrupoRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], GrupoService);
exports.GrupoService = GrupoService;
//# sourceMappingURL=grupo.service.js.map