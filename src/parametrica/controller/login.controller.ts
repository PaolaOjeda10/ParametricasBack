import { HttpService } from '@nestjs/axios';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
// import { PinoLogger } from 'nestjs-pino';
import { catchError, map, of } from 'rxjs';
// import { Messages } from 'src/common/constants/response-messages';
import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { LoginService } from '../service/authentication.service';

@Controller('authentication')
export class LogInController extends AbstractController {
  constructor(
    private readonly loginService: LoginService,
    private readonly http: HttpService, // private readonly logger: PinoLogger,
  ) {
    super();
  }
  @Post('login')
  async login(@Body() body, @Res() res: Response) {
    // body.contrasena = btoa(encodeURI(body.contrasena));
    const url = `${process.env.LOGIN_CORE}/auth`;
    const response = await this.http.post(url, body).pipe(
      map((response) => response.data),
      catchError((err) =>
        of({
          err: err,
        }),
      ),
    );
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
        // this.logger.error('[error] %o', Messages.INVALID_USER);
        return res.status(401).send({
          finalizado: false,
          mensaje: 'Usuario no autorizado',
          error: { message: r.err.message, status: r.err.status },
        });
      }
    });
  }
}
