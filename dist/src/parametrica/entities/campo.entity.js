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
exports.Campo = void 0;
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
const typeorm_1 = require("typeorm");
const seccion_entity_1 = require("./seccion.entity");
const index_1 = require("../../common/constants/index");
let Campo = class Campo extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Campo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Campo.prototype, "campo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Campo.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Campo.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "tooltip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Campo.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "iop", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Campo.prototype, "desabilitado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_defecto', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "valorDefecto", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { name: 'validacion', nullable: true }),
    __metadata("design:type", Array)
], Campo.prototype, "validacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "parametrica", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parametrica_text', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "parametricaText", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'campo_padre', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "campoPadre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'campo_hijo', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "campoHijo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'observable', nullable: true, default: true }),
    __metadata("design:type", Boolean)
], Campo.prototype, "observable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "filtro", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { name: 'max_min_fecha', nullable: true }),
    __metadata("design:type", Object)
], Campo.prototype, "maxMinFecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Campo.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Campo.prototype, "tabla", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cantiad_max' }),
    __metadata("design:type", Number)
], Campo.prototype, "cantidadMax", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'docuemnto_soporte', nullable: true }),
    __metadata("design:type", Boolean)
], Campo.prototype, "documentoSoporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_tipo_documento', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "codigoTipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'criterio_opcional', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "criterioOpcional", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_tipo_publicacion', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "codigoTipoPublicacion", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { name: 'kardex', nullable: true }),
    __metadata("design:type", Object)
], Campo.prototype, "kardex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grupo_parametrica', nullable: true }),
    __metadata("design:type", String)
], Campo.prototype, "grupoParametrica", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.Status,
    }),
    __metadata("design:type", String)
], Campo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_seccion', nullable: false }),
    __metadata("design:type", Number)
], Campo.prototype, "idSeccion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seccion_entity_1.Seccion, (seccion) => seccion.campos),
    (0, typeorm_1.JoinColumn)({
        name: 'id_seccion',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", seccion_entity_1.Seccion)
], Campo.prototype, "seccion", void 0);
Campo = __decorate([
    (0, typeorm_1.Entity)('campos', {
        schema: process.env.DB_SCHEMA_PARAMETRICA,
    })
], Campo);
exports.Campo = Campo;
//# sourceMappingURL=campo.entity.js.map