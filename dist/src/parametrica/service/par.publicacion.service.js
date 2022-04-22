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
exports.ParPublicacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const par_publicacion_repository_1 = require("../repositories/par.publicacion.repository");
let ParPublicacionService = class ParPublicacionService {
    constructor(parpublicacionRepository, cambioRepository) {
        this.parpublicacionRepository = parpublicacionRepository;
        this.cambioRepository = cambioRepository;
    }
    async createParPublicaciones(publicacion, { formulario, usuarioAuditoria }) {
        try {
            const resp = await this.parpublicacionRepository.createParPublicacion(publicacion);
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
    async updateParPublicacion(id, publicacion, { formulario, usuarioAuditoria }) {
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const pub = await this.parpublicacionRepository.getParPublicacionById(id);
        if (!pub) {
            throw new common_1.NotFoundException(`Parametrica Publicacion con #${id} no encontrado`);
        }
        const response = await this.parpublicacionRepository.updateParPublicacion(id, publicacion);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async getAllParPublicacion() {
        return await this.parpublicacionRepository.getAllParPublicacion();
    }
    async getParPublicacion(id) {
        return await this.parpublicacionRepository.getParPublicacionById(id);
    }
    async listarParPublicacionporCatalogoTramite(idCatalogoTramite) {
        const resp = await this.parpublicacionRepository.listarPublicacionporCatalogoTramite(idCatalogoTramite);
        return resp;
    }
    async deleteParPublicacion(id, formulario, usuarioAuditoria) {
        const cat = await this.parpublicacionRepository.getParPublicacionById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Par. Publicacion con #${id} no encontrado`);
        }
        const response = await this.parpublicacionRepository.removeParPublicacion(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
};
ParPublicacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(par_publicacion_repository_1.ParPublicacionRepository)),
    __metadata("design:paramtypes", [par_publicacion_repository_1.ParPublicacionRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], ParPublicacionService);
exports.ParPublicacionService = ParPublicacionService;
//# sourceMappingURL=par.publicacion.service.js.map