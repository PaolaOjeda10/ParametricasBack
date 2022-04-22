"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const grupo_entity_1 = require("../entities/grupo.entity");
let GrupoRepository = class GrupoRepository extends typeorm_1.Repository {
    async createGrupo(grupo) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(grupo_entity_1.Grupo)
            .values(Object.assign(Object.assign({}, grupo), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateGrupo(idg, grupo) {
        return await this.update(idg, grupo);
    }
    async getAllGrupo() {
        return await this.find({
            relations: ['secciones'],
            order: { id: 'ASC' },
        });
    }
    async getGrupoById(id) {
        return await this.findOne(id);
    }
    async listarGrupoporCatalogoTramite(idCatalogoTramite) {
        return await this.find({
            where: {
                idCatalogoTramite: idCatalogoTramite,
            },
            order: {
                id: 'ASC',
            },
        });
    }
    async removeGrupo(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
    async listarGrupoSeccionCampo() {
        const query = this.createQueryBuilder('g')
            .leftJoinAndSelect('g.secciones', 's')
            .leftJoinAndSelect('s.campos', 'c');
        return query.getMany();
    }
};
GrupoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(grupo_entity_1.Grupo)
], GrupoRepository);
exports.GrupoRepository = GrupoRepository;
//# sourceMappingURL=grupo.repository.js.map