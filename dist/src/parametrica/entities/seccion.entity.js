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
exports.Seccion = void 0;
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
const typeorm_1 = require("typeorm");
const grupo_entity_1 = require("./grupo.entity");
const campo_entity_1 = require("./campo.entity");
const index_1 = require("../../common/constants/index");
let Seccion = class Seccion extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seccion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seccion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Seccion.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.Status,
    }),
    __metadata("design:type", String)
], Seccion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_grupo' }),
    __metadata("design:type", Number)
], Seccion.prototype, "idGrupo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupo_entity_1.Grupo, (grupo) => grupo.secciones),
    (0, typeorm_1.JoinColumn)({
        name: 'id_grupo',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", grupo_entity_1.Grupo)
], Seccion.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => campo_entity_1.Campo, (campo) => campo.seccion),
    __metadata("design:type", Array)
], Seccion.prototype, "campos", void 0);
Seccion = __decorate([
    (0, typeorm_1.Entity)('secciones', {
        schema: process.env.DB_SCHEMA_PARAMETRICA,
    })
], Seccion);
exports.Seccion = Seccion;
//# sourceMappingURL=seccion.entity.js.map