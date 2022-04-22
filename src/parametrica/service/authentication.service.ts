import { Injectable } from '@nestjs/common';
import { ExternalServiceException } from 'src/common/exceptions/external-service.exception';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable, of } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
  constructor(
    private httpService: HttpService,
    private jwtTokenService: JwtService,
  ) {}

  async login(data): Promise<Observable<any>> {
    try {
      data.contrasena = btoa(encodeURI(data.contrasena));
      const url = `${process.env.LOGIN_CORE}/auth`;
      const response = await this.httpService.post(url, data).pipe(
        map((response) => response),
        catchError((err) =>
          of({
            err: err,
          }),
        ),
      );
      return response;
    } catch (error) {
      throw new ExternalServiceException('POST LOGIN', error);
    }
  }
  async loginWithCredentials(user: any) {
    const payload = {
      id: user.id,
      roles: user.roles,
      accessToken: user.access_token,
    };
    return {
      access_token: this.jwtTokenService.sign(payload),
      ...payload,
    };
  }
}
