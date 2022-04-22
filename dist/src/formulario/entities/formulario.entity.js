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
exports.Formulario = void 0;
const constants_1 = require("../../common/constants");
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
const typeorm_1 = require("typeorm");
let Formulario = class Formulario extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Formulario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Formulario.prototype, "tabla", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { name: 'cambio', nullable: true }),
    __metadata("design:type", Object)
], Formulario.prototype, "cambio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constants_1.Status,
    }),
    __metadata("design:type", String)
], Formulario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'usuario_base',
    }),
    __metadata("design:type", String)
], Formulario.prototype, "usuarioBase", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'usuario_aplicacion',
    }),
    __metadata("design:type", String)
], Formulario.prototype, "usuarioAplicacion", void 0);
Formulario = __decorate([
    (0, typeorm_1.Entity)('cambios', { schema: process.env.DB_SCHEMA_EMPRESA })
], Formulario);
exports.Formulario = Formulario;
//# sourceMappingURL=formulario.entity.js.map