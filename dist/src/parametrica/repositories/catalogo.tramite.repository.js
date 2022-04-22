"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaTramiteRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const parametrica_entity_1 = require("../entities/parametrica.entity");
const fs = require('fs');
let CategoriaTramiteRepository = class CategoriaTramiteRepository extends typeorm_1.Repository {
    async createCategoriaTramite(datos) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(parametrica_entity_1.Parametrica)
            .values(Object.assign(Object.assign({}, datos), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async getAllCatalogoTramite() {
        return await this.find({
            order: { id: 'ASC' },
            relations: [
                'aranceles',
                'documentosEmitidos',
                'parPublicaciones',
                'grupos',
            ],
        });
    }
    async getCatalogoTramiteById(id) {
        return await this.findOne(id);
    }
    async updateCatalogoTramite(idc, camps) {
        return await this.update(idc, Object.assign(Object.assign({}, camps), { usuarioActualizacion: '1' }));
    }
    async removeCatalogoTramite(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
    async getDataRelaciones() {
        const query = this.createQueryBuilder('catalogo_tramite')
            .leftJoinAndSelect('catalogo_tramite.documentosEmitidos', 'doc')
            .leftJoinAndSelect('catalogo_tramite.parPublicaciones', 'pub')
            .leftJoinAndSelect('catalogo_tramite.aranceles', 'aran')
            .leftJoinAndSelect('catalogo_tramite.grupos', 'group')
            .leftJoinAndSelect('group.secciones', 'sec')
            .leftJoinAndSelect('sec.campos', 'camp')
            .orderBy('catalogo_tramite.id', 'ASC');
        return query.getMany();
    }
    async generar(tabla) {
        try {
            const manager = (0, typeorm_1.getManager)();
            const query = `COPY ${process.env.DB_SCHEMA_EMPRESA}.${tabla} TO '/tmp/${tabla}.csv' with csv`;
            const createcsv = await manager.query(query);
            const source = fs.createReadStream(`/tmp/${tabla}.csv`);
            const dest = fs.createWriteStream(`${process.env.PATH_EXPORT_CSV}/${tabla}.csv`);
            source.pipe(dest);
            source.on('end', function () {
                console.log('Archivo copiado');
            });
            source.on('error', function (err) {
                console.log('Error:', err);
            });
            return createcsv;
        }
        catch (error) {
            return error;
        }
    }
};
CategoriaTramiteRepository = __decorate([
    (0, typeorm_1.EntityRepository)(parametrica_entity_1.Parametrica)
], CategoriaTramiteRepository);
exports.CategoriaTramiteRepository = CategoriaTramiteRepository;
//# sourceMappingURL=catalogo.tramite.repository.js.map