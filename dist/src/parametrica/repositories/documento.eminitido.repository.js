"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoEmitidoRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const documento_emitido_entity_1 = require("../entities/documento-emitido.entity");
let DocumentoEmitidoRepository = class DocumentoEmitidoRepository extends typeorm_1.Repository {
    async createDocumentoEmitido(documento) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(documento_emitido_entity_1.DocumentoEmitido)
            .values(Object.assign(Object.assign({}, documento), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateDocumentoEmitido(idc, documento) {
        return await this.update(idc, Object.assign(Object.assign({}, documento), { usuarioActualizacion: '1' }));
    }
    async getAllDocumentoEmitido() {
        return await this.find({
            order: {
                id: 'ASC',
            },
        });
    }
    async litarDocumentoporCatalogoTramite(idCatalogoTramite) {
        return await this.find({
            where: {
                idCatalogoTramite: idCatalogoTramite,
            },
            order: {
                id: 'ASC',
            },
        });
    }
    async getDcoumentoEmitidoById(id) {
        return await this.findOne(id);
    }
    async removeDocumento(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
DocumentoEmitidoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(documento_emitido_entity_1.DocumentoEmitido)
], DocumentoEmitidoRepository);
exports.DocumentoEmitidoRepository = DocumentoEmitidoRepository;
//# sourceMappingURL=documento.eminitido.repository.js.map