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
exports.CamposService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const campos_repository_1 = require("../repositories/campos.repository");
let CamposService = class CamposService {
    constructor(campoRepository, cambioRepository) {
        this.campoRepository = campoRepository;
        this.cambioRepository = cambioRepository;
    }
    async createCampo(campo, { formulario, usuarioAuditoria }) {
        try {
            const resp = await this.campoRepository.createCampo(campo);
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
    async updateCampo(id, campo, { formulario, usuarioAuditoria }) {
        const camp = await this.campoRepository.getCampoBydId(id);
        if (!camp) {
            throw new common_1.NotFoundException(`Campo con #${id} no encontrado`);
        }
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const response = await this.campoRepository.updateCampo(id, campo);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async listarCampoporSeccion(idSeccion) {
        const resp = await this.campoRepository.listarCampoporSeccion(idSeccion);
        return resp;
    }
    async getAllCampos() {
        return await this.campoRepository.getAllCampos();
    }
    async getCampoById(id) {
        return await this.campoRepository.getCampoBydId(id);
    }
    async deleteCampo(id, formulario, usuarioAuditoria) {
        const cat = await this.campoRepository.getCampoBydId(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Grupo con #${id} no encontrado`);
        }
        const response = await this.campoRepository.removeCampo(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
};
CamposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campos_repository_1.CampoRepository)),
    __metadata("design:paramtypes", [campos_repository_1.CampoRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], CamposService);
exports.CamposService = CamposService;
//# sourceMappingURL=campos.service.js.map