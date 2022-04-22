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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const external_service_exception_1 = require("../../common/exceptions/external-service.exception");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const jwt_1 = require("@nestjs/jwt");
let LoginService = class LoginService {
    constructor(httpService, jwtTokenService) {
        this.httpService = httpService;
        this.jwtTokenService = jwtTokenService;
    }
    async login(data) {
        try {
            data.contrasena = btoa(encodeURI(data.contrasena));
            const url = `${process.env.LOGIN_CORE}/auth`;
            const response = await this.httpService.post(url, data).pipe((0, rxjs_1.map)((response) => response), (0, rxjs_1.catchError)((err) => (0, rxjs_1.of)({
                err: err,
            })));
            return response;
        }
        catch (error) {
            throw new external_service_exception_1.ExternalServiceException('POST LOGIN', error);
        }
    }
    async loginWithCredentials(user) {
        const payload = {
            id: user.id,
            roles: user.roles,
            accessToken: user.access_token,
        };
        return Object.assign({ access_token: this.jwtTokenService.sign(payload) }, payload);
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=authentication.service.js.map