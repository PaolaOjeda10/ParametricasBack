"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametricaModule = void 0;
const common_1 = require("@nestjs/common");
const parametrica_service_1 = require("./service/parametrica.service");
const parametrica_controller_1 = require("./controller/parametrica.controller");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_repository_1 = require("./repositories/categoria.repository");
const config_1 = require("@nestjs/config");
const catalogo_tramite_repository_1 = require("./repositories/catalogo.tramite.repository");
const grupo_repository_1 = require("./repositories/grupo.repository");
const seccion_repository_1 = require("./repositories/seccion.repository");
const campos_repository_1 = require("./repositories/campos.repository");
const aranceles_repository_1 = require("./repositories/aranceles.repository");
const par_publicacion_repository_1 = require("./repositories/par.publicacion.repository");
const documento_eminitido_repository_1 = require("./repositories/documento.eminitido.repository");
const aranceles_service_1 = require("./service/aranceles.service");
const campos_service_1 = require("./service/campos.service");
const catalogo_tramite_service_1 = require("./service/catalogo.tramite.service");
const documento_emitido_service_1 = require("./service/documento.emitido.service");
const grupo_service_1 = require("./service/grupo.service");
const par_publicacion_service_1 = require("./service/par.publicacion.service");
const seccion_service_1 = require("./service/seccion.service");
const catalogo_tramite_controller_1 = require("./controller/catalogo.tramite.controller");
const aranceles_controller_1 = require("./controller/aranceles.controller");
const campos_controller_1 = require("./controller/campos.controller");
const documento_emitido_controller_1 = require("./controller/documento.emitido.controller");
const grupo_controller_1 = require("./controller/grupo.controller");
const par_publicacion_controller_1 = require("./controller/par.publicacion.controller");
const seccion_controller_1 = require("./controller/seccion.controller");
const authentication_service_1 = require("./service/authentication.service");
const login_controller_1 = require("./controller/login.controller");
const axios_1 = require("@nestjs/axios");
const formulario_cambios_repository_1 = require("../formulario/repository/formulario-cambios.repository");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let ParametricaModule = class ParametricaModule {
};
ParametricaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                categoria_repository_1.CategoriaRepository,
                catalogo_tramite_repository_1.CategoriaTramiteRepository,
                grupo_repository_1.GrupoRepository,
                seccion_repository_1.SeccionRepository,
                campos_repository_1.CampoRepository,
                aranceles_repository_1.ArancelRepository,
                par_publicacion_repository_1.ParPublicacionRepository,
                documento_eminitido_repository_1.DocumentoEmitidoRepository,
                formulario_cambios_repository_1.FormularioCambiosRepository,
            ]),
            axios_1.HttpModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
                }),
            }),
        ],
        controllers: [
            parametrica_controller_1.ParametricaController,
            catalogo_tramite_controller_1.CatalogoTramiteController,
            aranceles_controller_1.ArancelesController,
            campos_controller_1.CampoController,
            documento_emitido_controller_1.DocumentoEmitidoController,
            grupo_controller_1.GrupoController,
            par_publicacion_controller_1.ParPublicacionController,
            seccion_controller_1.SeccionController,
            login_controller_1.LogInController,
        ],
        providers: [
            config_1.ConfigService,
            parametrica_service_1.ParametricaService,
            aranceles_service_1.ArancelesService,
            campos_service_1.CamposService,
            catalogo_tramite_service_1.CatalogoTramiteService,
            documento_emitido_service_1.DocumentoEmitdoService,
            grupo_service_1.GrupoService,
            par_publicacion_service_1.ParPublicacionService,
            seccion_service_1.SeccionService,
            authentication_service_1.LoginService,
            jwt_strategy_1.JwtStrategy,
        ],
    })
], ParametricaModule);
exports.ParametricaModule = ParametricaModule;
//# sourceMappingURL=parametrica.module.js.map