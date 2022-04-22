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
exports.AbstractEntityEmpresa = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const abstract_entity_dto_1 = require("./abstract-entity.dto");
class AbstractEntityEmpresa extends abstract_entity_dto_1.AbstractEntity {
}
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_baja', nullable: true }),
    __metadata("design:type", String)
], AbstractEntityEmpresa.prototype, "usuarioBaja", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_baja', nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], AbstractEntityEmpresa.prototype, "fechaBaja", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'accion', nullable: true }),
    __metadata("design:type", String)
], AbstractEntityEmpresa.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        nullable: false,
        default: constants_1.Status.ACTIVE,
        length: 30,
    }),
    __metadata("design:type", String)
], AbstractEntityEmpresa.prototype, "estado", void 0);
exports.AbstractEntityEmpresa = AbstractEntityEmpresa;
//# sourceMappingURL=abstract-entity-empresa.dto.js.map