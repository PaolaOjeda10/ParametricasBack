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
// import { Role } from 'src/auth';
import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { LoginInterceptor } from '../interceptor/login.interceptor';
import { CamposService } from '../service/campos.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('campos')
export class CampoController extends AbstractController {
  constructor(private readonly campoService: CamposService) {
    super();
  }
  @Post('/addCampo')
  async addCampo(@Body() body, @Req() req) {
    const { formulario, campo } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.campoService.createCampo(campo, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }
  @Get('/getCampo')
  async getAllCampo() {
    const resp = await this.campoService.getAllCampos();
    return this.successList(resp);
  }
  @Post('/listarCampo')
  async listarCampos(@Body() body) {
    const resp = await this.campoService.listarCampoporSeccion(body.idSeccion);
    return this.successList(resp);
  }
  @Post('/getCampoId')
  async getCampoById(@Body() body) {
    const resp = await this.campoService.getCampoById(body.id);
    return this.successList(resp);
  }
  @Patch('/updateCampo')
  async updateCampo(@Body() body, @Req() req) {
    const { id, campo, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.campoService.updateCampo(id, campo, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteCampo')
  async deleteCampo(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.campoService.deleteCampo(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
