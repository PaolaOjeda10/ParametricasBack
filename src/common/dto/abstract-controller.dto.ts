import { BadRequestException } from '@nestjs/common';
import { Messages } from '../constants/response-messages';
import { SuccessResponseDto } from './success-response.dto';
// import jwt_decode from 'jwt-decode';
// import jwtJsDecode from 'jwt-js-decode';
export abstract class AbstractController {
  private makeResponse(data, message: string): SuccessResponseDto {
    return {
      finalizado: true,
      mensaje: message,
      datos: data,
    };
  }

  successList(data, message = Messages.SUCCESS_LIST): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successUpdate(data, message = Messages.SUCCESS_UPDATE): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successDelete(data, message = Messages.SUCCESS_DELETE): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successCreate(data, message = Messages.SUCCESS_CREATE): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successListRows(data, message = Messages.SUCCESS_LIST): SuccessResponseDto {
    const [filas, total] = data;
    return this.makeResponse({ total, filas }, message);
  }

  getUser(req) {
    if (req?.user?.id) {
      return req.user.id;
    }
    throw new BadRequestException(
      `Es necesario que este autenticado para consumir este recurso.`,
    );
  }

  getAccessTokenCD(req) {
    if (req?.user?.accessToken) {
      return req.user.accessToken;
    }
    throw new BadRequestException(
      `Es necesario que este autenticado para consumir este recurso.`,
    );
  }
  getUserToken(req) {
    console.log('USER TOken', req.user);
    try {
      // const jwt = jwtJsDecode.jwtDecode(req);
      // const decoded = jwt_decode(req);
      return { id: '1' };
    } catch (error) {
      console.log(error);
    }
    // if (jwt) {
    // return jwt.payload;
    // }
    // throw new BadRequestException(
    //   `Es necesario que este autenticado para consumir este recurso.`,
    // );
  }
}
