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
exports.SeccionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const seccion_repository_1 = require("../repositories/seccion.repository");
let SeccionService = class SeccionService {
    constructor(seccionRepository, cambioRepository) {
        this.seccionRepository = seccionRepository;
        this.cambioRepository = cambioRepository;
    }
    async createSeccion(seccion, { formulario, usuarioAuditoria }) {
        try {
            const sec = await this.seccionRepository.createSeccion(seccion);
            formulario.cambio.id = sec.identifiers[0].id;
            if (sec) {
                await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
            }
            return sec;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async listarSeccionporGrupo(idGrupo) {
        const resp = await this.seccionRepository.listarSeccionporGrupo(idGrupo);
        return resp;
    }
    async updateSeccion(id, seccion, { formulario, usuarioAuditoria }) {
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const sec = await this.seccionRepository.getSeccionById(id);
        if (!sec) {
            throw new common_1.NotFoundException(`Seccion con #${id} no encontrado`);
        }
        const response = await this.seccionRepository.update(id, seccion);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async getAllSeccion() {
        return await this.seccionRepository.getAllSeccion();
    }
    async getSeccionById(id) {
        const sec = await this.seccionRepository.getSeccionById(id);
        if (!sec) {
            throw new common_1.NotFoundException(`Seccion con #${id} no encontrado`);
        }
        return sec;
    }
    async deleteSeccion(id, formulario, usuarioAuditoria) {
        const cat = await this.seccionRepository.getSeccionById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Grupo con #${id} no encontrado`);
        }
        const response = await this.seccionRepository.removeSeccion(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
};
SeccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seccion_repository_1.SeccionRepository)),
    __metadata("design:paramtypes", [seccion_repository_1.SeccionRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], SeccionService);
exports.SeccionService = SeccionService;
//# sourceMappingURL=seccion.service.js.map