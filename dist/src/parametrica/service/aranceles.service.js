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
exports.ArancelesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const response_messages_1 = require("../../common/constants/response-messages");
const entity_not_found_exception_1 = require("../../common/exceptions/entity-not-found.exception");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const aranceles_repository_1 = require("../repositories/aranceles.repository");
let ArancelesService = class ArancelesService {
    constructor(arancelRepository, cambioRepository) {
        this.arancelRepository = arancelRepository;
        this.cambioRepository = cambioRepository;
    }
    async createArancel(arancel, { formulario, usuarioAuditoria }) {
        const { codTipoSocietario, idCatalogoTramite } = arancel;
        const arcl = await this.arancelRepository.buscarArancel(codTipoSocietario, idCatalogoTramite);
        if (arcl) {
            throw new common_1.PreconditionFailedException('Codigo Tipo Societario ya Asignado');
        }
        try {
            const resp = await this.arancelRepository.createArancel(arancel);
            formulario.cambio.id = resp.identifiers[0].id;
            if (resp) {
                await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
            }
            return {
                finalizado: true,
                mensaje: 'Registro exitoso',
                datos: resp,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateArancel(id, arancel, { formulario, usuarioAuditoria }) {
        const { codTipoSocietario, idCatalogoTramite } = arancel;
        const arcls = await this.arancelRepository.buscarArancel(codTipoSocietario, idCatalogoTramite);
        if (arcls && arcls.id !== id) {
            throw new common_1.PreconditionFailedException('Codigo Tipo Societario ya Asignado');
        }
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const arcl = await this.arancelRepository.getArancelById(id);
        if (!arcl) {
            throw new entity_not_found_exception_1.EntityNotFoundException(response_messages_1.Messages.EXCEPTION_NOT_FOUND);
        }
        const response = await this.arancelRepository.updateArancel(id, arancel);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async getAllArancel() {
        return await this.arancelRepository.getAllArancel();
    }
    async getArancel(id) {
        return await this.arancelRepository.getArancelById(id);
    }
    async listarArancelporIdCatalogoTramite(idCatalogoTramite) {
        const resp = await this.arancelRepository.listarArancel(idCatalogoTramite);
        return resp;
    }
    async deleteArancel(id, formulario, usuarioAuditoria) {
        const cat = await this.arancelRepository.getArancelById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Arancel con #${id} no encontrado`);
        }
        const response = await this.arancelRepository.removeArancel(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
};
ArancelesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aranceles_repository_1.ArancelRepository)),
    __metadata("design:paramtypes", [aranceles_repository_1.ArancelRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], ArancelesService);
exports.ArancelesService = ArancelesService;
//# sourceMappingURL=aranceles.service.js.map