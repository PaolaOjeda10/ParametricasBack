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
exports.Rol = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../../../common/constants");
let Rol = class Rol {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    __metadata("design:type", String)
], Rol.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        nullable: false,
        length: 30,
        default: constants_1.Status.ACTIVE,
    }),
    __metadata("design:type", String)
], Rol.prototype, "estado", void 0);
Rol = __decorate([
    (0, typeorm_1.Entity)('roles', { schema: process.env.DB_SCHEMA_EMPRESA })
], Rol);
exports.Rol = Rol;
//# sourceMappingURL=rol.entity.js.map