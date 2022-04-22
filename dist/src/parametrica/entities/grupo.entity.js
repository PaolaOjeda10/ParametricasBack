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
exports.Grupo = void 0;
const typeorm_1 = require("typeorm");
const seccion_entity_1 = require("./seccion.entity");
const parametrica_entity_1 = require("./parametrica.entity");
const index_1 = require("../../common/constants/index");
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
let Grupo = class Grupo extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint' }),
    __metadata("design:type", Number)
], Grupo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Grupo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Grupo.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "flujo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.Status,
    }),
    __metadata("design:type", String)
], Grupo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'documento_soporte', default: false }),
    __metadata("design:type", Boolean)
], Grupo.prototype, "documentoSoporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aprobacion_documentos', default: false }),
    __metadata("design:type", Boolean)
], Grupo.prototype, "aprobacionDocumentos", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Grupo.prototype, "pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_catalogo_tramite', nullable: false }),
    __metadata("design:type", Number)
], Grupo.prototype, "idCatalogoTramite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parametrica_entity_1.Parametrica, (catalogoTramite) => catalogoTramite.grupos),
    (0, typeorm_1.JoinColumn)({
        name: 'id_catalogo_tramite',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", parametrica_entity_1.Parametrica)
], Grupo.prototype, "catalogoTramite", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seccion_entity_1.Seccion, (seccion) => seccion.grupo),
    __metadata("design:type", Array)
], Grupo.prototype, "secciones", void 0);
Grupo = __decorate([
    (0, typeorm_1.Entity)('grupos', {
        schema: process.env.DB_SCHEMA_PARAMETRICA,
    })
], Grupo);
exports.Grupo = Grupo;
//# sourceMappingURL=grupo.entity.js.map