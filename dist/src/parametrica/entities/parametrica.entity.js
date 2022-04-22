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
exports.Parametrica = void 0;
const abstract_entity_dto_1 = require("../../common/dto/abstract-entity.dto");
const typeorm_1 = require("typeorm");
const parametrica_categoria_entity_1 = require("./parametrica-categoria.entity");
const arancel_entity_1 = require("./arancel.entity");
const documento_emitido_entity_1 = require("./documento-emitido.entity");
const par_publicacion_entity_1 = require("./par-publicacion.entity");
const grupo_entity_1 = require("./grupo.entity");
const index_1 = require("../../common/constants/index");
let Parametrica = class Parametrica extends abstract_entity_dto_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Parametrica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parametrica.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parametrica.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.Status,
        default: index_1.Status.ACTIVE,
    }),
    __metadata("design:type", String)
], Parametrica.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.TramiteParametricaTipo,
    }),
    __metadata("design:type", String)
], Parametrica.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_catalogo',
        type: 'enum',
        enum: index_1.TramiteParametricaTipoCatalogo,
        default: index_1.TramiteParametricaTipoCatalogo.TRAMITE,
    }),
    __metadata("design:type", String)
], Parametrica.prototype, "tipoCatalogo", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        array: true,
        name: 'tipo_societario_habilitado',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Parametrica.prototype, "tipoSocietarioHabilitado", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        array: true,
        name: 'tipo_tramite_habilitado',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Parametrica.prototype, "tipoTramiteHabilitado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parametrica.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_registrar_editar_seccion', default: false }),
    __metadata("design:type", Boolean)
], Parametrica.prototype, "requiereRegistrarEditarSeccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_pago' }),
    __metadata("design:type", Boolean)
], Parametrica.prototype, "requierePago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_presentacion', default: true }),
    __metadata("design:type", Boolean)
], Parametrica.prototype, "requierePresentacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_revision', default: true }),
    __metadata("design:type", Boolean)
], Parametrica.prototype, "requiereRevision", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Parametrica.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "api", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ruta_front', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "rutaFront", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pre_ruta_front', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "preRutaFront", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ruta_inicio_front', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "rutaInicioFront", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requiere_matricula_vigente', default: false }),
    __metadata("design:type", Boolean)
], Parametrica.prototype, "requiereMatriculaVigente", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { name: 'kardex', nullable: true }),
    __metadata("design:type", Object)
], Parametrica.prototype, "kardex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_obtener_informacion', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoObtenerInformacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_validar_datos', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoValidarDatos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_despues_del_pago', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoDespuesDelPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_volcar_datos', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoVolcarDatos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_publicar', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoPublicar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_generar_certificado', nullable: true }),
    __metadata("design:type", String)
], Parametrica.prototype, "metodoGenerarCertificado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_tramite_parametrica_categoria' }),
    __metadata("design:type", Number)
], Parametrica.prototype, "idParametricaCategoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parametrica_categoria_entity_1.ParametricaCategoria, (parametricaCategoria) => parametricaCategoria.parametricas),
    (0, typeorm_1.JoinColumn)({
        name: 'id_tramite_parametrica_categoria',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", parametrica_categoria_entity_1.ParametricaCategoria)
], Parametrica.prototype, "parametricaCategoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => arancel_entity_1.Arancel, (arancel) => arancel.catalogoTramite),
    __metadata("design:type", Array)
], Parametrica.prototype, "aranceles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documento_emitido_entity_1.DocumentoEmitido, (documentosEmitidos) => documentosEmitidos.catalogoTramite),
    __metadata("design:type", Array)
], Parametrica.prototype, "documentosEmitidos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => par_publicacion_entity_1.ParPublicacion, (parPublicacion) => parPublicacion.catalogoTramite),
    __metadata("design:type", Array)
], Parametrica.prototype, "parPublicaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupo_entity_1.Grupo, (grupo) => grupo.catalogoTramite),
    __metadata("design:type", Array)
], Parametrica.prototype, "grupos", void 0);
Parametrica = __decorate([
    (0, typeorm_1.Entity)('catalogo_tramites', { schema: process.env.DB_SCHEMA_PARAMETRICA })
], Parametrica);
exports.Parametrica = Parametrica;
//# sourceMappingURL=parametrica.entity.js.map