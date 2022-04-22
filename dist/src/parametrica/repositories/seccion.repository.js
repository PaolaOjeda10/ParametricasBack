"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeccionRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const seccion_entity_1 = require("../entities/seccion.entity");
let SeccionRepository = class SeccionRepository extends typeorm_1.Repository {
    async createSeccion(seccion) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(seccion_entity_1.Seccion)
            .values(Object.assign(Object.assign({}, seccion), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateSeccion(ids, seccion) {
        return this.update(ids, seccion);
    }
    async getAllSeccion() {
        return await this.find({
            order: { id: 'ASC' },
        });
    }
    async listarSeccionporGrupo(idGrupo) {
        return await this.find({
            where: {
                idGrupo: idGrupo,
            },
            relations: ['grupo'],
            order: {
                id: 'ASC',
            },
        });
    }
    async getSeccionById(id) {
        return await this.findOne(id);
    }
    async removeSeccion(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
SeccionRepository = __decorate([
    (0, typeorm_1.EntityRepository)(seccion_entity_1.Seccion)
], SeccionRepository);
exports.SeccionRepository = SeccionRepository;
//# sourceMappingURL=seccion.repository.js.map