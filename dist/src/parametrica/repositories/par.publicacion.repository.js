"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParPublicacionRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const par_publicacion_entity_1 = require("../entities/par-publicacion.entity");
let ParPublicacionRepository = class ParPublicacionRepository extends typeorm_1.Repository {
    async createParPublicacion(publicacion) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(par_publicacion_entity_1.ParPublicacion)
            .values(Object.assign(Object.assign({}, publicacion), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateParPublicacion(id, publicacion) {
        return await this.update(id, Object.assign(Object.assign({}, publicacion), { usuarioActualizacion: '1' }));
    }
    async getAllParPublicacion() {
        return await this.find({
            order: {
                id: 'ASC',
            },
        });
    }
    async listarPublicacionporCatalogoTramite(idCatalogoTramite) {
        return await this.find({
            where: {
                idCatalogoTramite: idCatalogoTramite,
            },
            order: {
                id: 'ASC',
            },
        });
    }
    async getParPublicacionById(id) {
        return await this.findOne(id);
    }
    async removeParPublicacion(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
ParPublicacionRepository = __decorate([
    (0, typeorm_1.EntityRepository)(par_publicacion_entity_1.ParPublicacion)
], ParPublicacionRepository);
exports.ParPublicacionRepository = ParPublicacionRepository;
//# sourceMappingURL=par.publicacion.repository.js.map