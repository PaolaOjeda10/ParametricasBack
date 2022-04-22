import {
  CallHandler,
  NestInterceptor,
  Injectable,
  ExecutionContext,
  // BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Role } from '../../auth/';
@Injectable()
export class LoginInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const [req] = context.getArgs();
    if (!req.user) {
      throw new UnauthorizedException('Usuario no Autorizado');
    }
    const superAdmin = req.user.rol.some((element) => {
      return element.rol === Role.SUPER_ADMIN;
    });
    if (!superAdmin) {
      console.log('USUARIO NO AUTORIZADO');
      throw new UnauthorizedException('No tienes los permisos suficientes');
    }
    return next.handle().pipe(
      tap(() => {
        console.log('SUPER_ADMIN', superAdmin);
      }),
    );
  }
}
