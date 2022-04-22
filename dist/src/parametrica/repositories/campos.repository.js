"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const campo_entity_1 = require("../entities/campo.entity");
let CampoRepository = class CampoRepository extends typeorm_1.Repository {
    async createCampo(campos) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(campo_entity_1.Campo)
            .values(Object.assign(Object.assign({}, campos), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateCampo(idc, camps) {
        return await this.update(idc, camps);
    }
    async listarCampoporSeccion(idSeccion) {
        return await this.find({
            where: {
                idSeccion: idSeccion,
            },
            order: {
                id: 'ASC',
            },
        });
    }
    async getAllCampos() {
        return await this.find({
            relations: ['seccion'],
            order: {
                id: 'ASC',
            },
        });
    }
    async getCampoBydId(id) {
        return await this.findOne(id);
    }
    async removeCampo(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
CampoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(campo_entity_1.Campo)
], CampoRepository);
exports.CampoRepository = CampoRepository;
//# sourceMappingURL=campos.repository.js.map