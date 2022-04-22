"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const parametrica_categoria_entity_1 = require("../entities/parametrica-categoria.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("../../common/constants");
let CategoriaRepository = class CategoriaRepository extends typeorm_1.Repository {
    async createCategoria(categoria) {
        const resp = await this.createQueryBuilder()
            .insert()
            .into(parametrica_categoria_entity_1.ParametricaCategoria)
            .values(Object.assign(Object.assign({}, categoria), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateCategoria(idc, categoria) {
        return await this.update(idc, Object.assign(Object.assign({}, categoria), { usuarioActualizacion: '1' }));
    }
    async getAllCategoria() {
        return await this.find({
            order: {
                id: 'ASC',
            },
        });
    }
    async getCategoriaById(id) {
        return await this.findOne(id);
    }
    async removeCategoria(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
CategoriaRepository = __decorate([
    (0, typeorm_1.EntityRepository)(parametrica_categoria_entity_1.ParametricaCategoria)
], CategoriaRepository);
exports.CategoriaRepository = CategoriaRepository;
//# sourceMappingURL=categoria.repository.js.map