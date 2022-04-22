"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioCambiosRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const formulario_entity_1 = require("../entities/formulario.entity");
let FormularioCambiosRepository = class FormularioCambiosRepository extends typeorm_1.Repository {
    async createRegistroCambios(formulario, usuarioAuditoria) {
        const { tabla, cambio } = formulario;
        const resp = await (0, typeorm_1.getRepository)(formulario_entity_1.Formulario)
            .createQueryBuilder()
            .insert()
            .into(formulario_entity_1.Formulario)
            .values({
            tabla: tabla,
            cambio: cambio,
            estado: constants_1.Status.ACTIVE,
            usuarioCreacion: usuarioAuditoria || '1',
            usuarioAplicacion: usuarioAuditoria || '',
            usuarioBase: () => 'USER',
        })
            .execute();
        return resp;
    }
};
FormularioCambiosRepository = __decorate([
    (0, typeorm_1.EntityRepository)(formulario_entity_1.Formulario)
], FormularioCambiosRepository);
exports.FormularioCambiosRepository = FormularioCambiosRepository;
//# sourceMappingURL=formulario-cambios.repository.js.map