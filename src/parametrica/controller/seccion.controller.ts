import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { LoginInterceptor } from '../interceptor/login.interceptor';
import { SeccionService } from '../service/seccion.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('secciones')
export class SeccionController extends AbstractController {
  constructor(private readonly seccionService: SeccionService) {
    super();
  }
  @Post('/addSeccion')
  async addSeccion(@Body() body, @Req() req) {
    const { seccion, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.seccionService.createSeccion(seccion, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }
  @Get('/getSeccion')
  async getAllSeccioon() {
    const resp = await this.seccionService.getAllSeccion();
    return this.successList(resp);
  }
  @Post('/getSeccionId')
  async getSeccionById(@Body() body) {
    const resp = await this.seccionService.getSeccionById(body.id);
    return this.successList(resp);
  }
  @Post('/listarSecciones')
  async listarSeccines(@Body() body) {
    const resp = await this.seccionService.listarSeccionporGrupo(body.idGrupo);
    return this.successList(resp);
  }
  @Patch('/updateSeccion')
  async updateSeccion(@Body() body, @Req() req) {
    const { id, seccion, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.seccionService.updateSeccion(id, seccion, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteSeccion')
  async deleteSeccion(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.seccionService.deleteSeccion(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
