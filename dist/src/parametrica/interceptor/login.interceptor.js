"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const auth_1 = require("../../auth/");
let LoginInterceptor = class LoginInterceptor {
    intercept(context, next) {
        const [req] = context.getArgs();
        if (!req.user) {
            throw new common_1.UnauthorizedException('Usuario no Autorizado');
        }
        const superAdmin = req.user.rol.some((element) => {
            return element.rol === auth_1.Role.SUPER_ADMIN;
        });
        if (!superAdmin) {
            console.log('USUARIO NO AUTORIZADO');
            throw new common_1.UnauthorizedException('No tienes los permisos suficientes');
        }
        return next.handle().pipe((0, operators_1.tap)(() => {
            console.log('SUPER_ADMIN', superAdmin);
        }));
    }
};
LoginInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoginInterceptor);
exports.LoginInterceptor = LoginInterceptor;
//# sourceMappingURL=login.interceptor.js.map