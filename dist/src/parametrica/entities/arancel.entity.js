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
exports.Arancel = void 0;
const typeorm_1 = require("typeorm");
const parametrica_entity_1 = require("./parametrica.entity");
const index_1 = require("../../common/constants/index");
const abstract_entity_empresa_dto_1 = require("../../common/dto/abstract-entity-empresa.dto");
let Arancel = class Arancel extends abstract_entity_empresa_dto_1.AbstractEntityEmpresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Arancel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'monto',
        type: 'numeric',
        precision: 20,
        scale: 5,
    }),
    __metadata("design:type", Number)
], Arancel.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Arancel.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'funcion_dependiente', nullable: true }),
    __metadata("design:type", String)
], Arancel.prototype, "funcionDependiente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cod_tipo_societario', nullable: true }),
    __metadata("design:type", String)
], Arancel.prototype, "codTipoSocietario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: index_1.Status,
    }),
    __metadata("design:type", String)
], Arancel.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_catalogo_tramite' }),
    __metadata("design:type", Number)
], Arancel.prototype, "idCatalogoTramite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parametrica_entity_1.Parametrica, (catalogoTramite) => catalogoTramite.aranceles),
    (0, typeorm_1.JoinColumn)({
        name: 'id_catalogo_tramite',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", parametrica_entity_1.Parametrica)
], Arancel.prototype, "catalogoTramite", void 0);
Arancel = __decorate([
    (0, typeorm_1.Entity)('aranceles', {
        schema: process.env.DB_SCHEMA_PARAMETRICA,
    })
], Arancel);
exports.Arancel = Arancel;
//# sourceMappingURL=arancel.entity.js.map