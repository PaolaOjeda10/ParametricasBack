import { CallHandler, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LoginInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
}
