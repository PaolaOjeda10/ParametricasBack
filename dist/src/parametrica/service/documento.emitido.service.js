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
exports.DocumentoEmitdoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const documento_eminitido_repository_1 = require("../repositories/documento.eminitido.repository");
let DocumentoEmitdoService = class DocumentoEmitdoService {
    constructor(documentoRepository, cambioRepository) {
        this.documentoRepository = documentoRepository;
        this.cambioRepository = cambioRepository;
    }
    async createDocumentoEmitido(documento, { formulario, usuarioAuditoria }) {
        try {
            const resp = await this.documentoRepository.createDocumentoEmitido(documento);
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
    async updateDocumentoEmitido(id, documento, { formulario, usuarioAuditoria }) {
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        const doc = await this.documentoRepository.getDcoumentoEmitidoById(id);
        if (!doc) {
            throw new common_1.NotFoundException(`Documento Emitido con #${id}, no encontrado`);
        }
        const response = await this.documentoRepository.updateDocumentoEmitido(id, documento);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return {
            finalizado: true,
            mensaje: 'Actualizacion exitosa',
            datos: response,
        };
    }
    async getAllDocumento() {
        return await this.documentoRepository.getAllDocumentoEmitido();
    }
    async getDocumentoEmitido(id) {
        return await this.documentoRepository.getDcoumentoEmitidoById(id);
    }
    async listarDocumentoporCatalogoTramite(idCatalogoTramite) {
        const resp = await this.documentoRepository.litarDocumentoporCatalogoTramite(idCatalogoTramite);
        return resp;
    }
    async deleteDocumentoEmitido(id, formulario, usuarioAuditoria) {
        const cat = await this.documentoRepository.getDcoumentoEmitidoById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Documento Emitido con #${id} no encontrado`);
        }
        const response = await this.documentoRepository.removeDocumento(id);
        if (response) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return response;
    }
};
DocumentoEmitdoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documento_eminitido_repository_1.DocumentoEmitidoRepository)),
    __metadata("design:paramtypes", [documento_eminitido_repository_1.DocumentoEmitidoRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], DocumentoEmitdoService);
exports.DocumentoEmitdoService = DocumentoEmitdoService;
//# sourceMappingURL=documento.emitido.service.js.map