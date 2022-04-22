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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInController = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const abstract_controller_dto_1 = require("../../common/dto/abstract-controller.dto");
const authentication_service_1 = require("../service/authentication.service");
let LogInController = class LogInController extends abstract_controller_dto_1.AbstractController {
    constructor(loginService, http) {
        super();
        this.loginService = loginService;
        this.http = http;
    }
    async login(body, res) {
        const url = `${process.env.LOGIN_CORE}/auth`;
        const response = await this.http.post(url, body).pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((err) => (0, rxjs_1.of)({
            err: err,
        })));
        await response.subscribe(async (r) => {
            if (r && r.finalizado) {
                const a = await this.loginService.loginWithCredentials(r.datos);
                return res.status(200).send({
                    finalizado: true,
                    mensaje: 'Credenciales Correctas',
                    datos: a,
                });
            }
            if (r.err) {
                return res.status(401).send({
                    finalizado: false,
                    mensaje: 'Usuario no autorizado',
                    error: { message: r.err.message, status: r.err.status },
                });
            }
        });
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LogInController.prototype, "login", null);
LogInController = __decorate([
    (0, common_1.Controller)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.LoginService,
        axios_1.HttpService])
], LogInController);
exports.LogInController = LogInController;
//# sourceMappingURL=login.controller.js.map