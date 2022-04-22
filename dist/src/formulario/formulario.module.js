"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const formulario_cambios_repository_1 = require("./repository/formulario-cambios.repository");
const formulario_cambios_service_1 = require("./service/formulario.cambios.service");
let FormularioModule = class FormularioModule {
};
FormularioModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [formulario_cambios_service_1.FormularioCambiosService],
        imports: [typeorm_1.TypeOrmModule.forFeature([formulario_cambios_repository_1.FormularioCambiosRepository])],
    })
], FormularioModule);
exports.FormularioModule = FormularioModule;
//# sourceMappingURL=formulario.module.js.map