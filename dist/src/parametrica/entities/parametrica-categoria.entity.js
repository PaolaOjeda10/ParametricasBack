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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametricaCategoria = void 0;
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
const typeorm_1 = require("typeorm");
const parametrica_entity_1 = require("./parametrica.entity");
const constants_1 = require("../../common/constants");
let ParametricaCategoria = class ParametricaCategoria extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ParametricaCategoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ParametricaCategoria.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParametricaCategoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constants_1.Status,
    }),
    __metadata("design:type", String)
], ParametricaCategoria.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_catalogo',
        type: 'enum',
        enum: constants_1.TramiteParametricaTipoCatalogo,
        default: constants_1.TramiteParametricaTipoCatalogo.TRAMITE,
    }),
    __metadata("design:type", String)
], ParametricaCategoria.prototype, "tipoCatalogo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ParametricaCategoria.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parametrica_entity_1.Parametrica, (parametrica) => parametrica),
    __metadata("design:type", Array)
], ParametricaCategoria.prototype, "parametricas", void 0);
ParametricaCategoria = __decorate([
    (0, typeorm_1.Entity)('categorias', {
        schema: process.env.DB_SCHEMA_PARAMETRICA,
    })
], ParametricaCategoria);
exports.ParametricaCategoria = ParametricaCategoria;
//# sourceMappingURL=parametrica-categoria.entity.js.map