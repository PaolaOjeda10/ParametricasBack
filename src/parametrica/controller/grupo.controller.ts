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
import { GrupoService } from '../service/grupo.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('grupos')
export class GrupoController extends AbstractController {
  constructor(private readonly grupoService: GrupoService) {
    super();
  }
  @Post('/addGrupo')
  async addGrupo(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const { grupo, formulario } = body;
    const resp = await this.grupoService.createGrupo(grupo, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }
  @Get('/getGrupo')
  async getAllGrupo() {
    const resp = await this.grupoService.getAllGrupo();
    return this.successList(resp);
  }
  @Post('/getGrupoId')
  async getGrupoById(@Body() body) {
    const resp = await this.grupoService.getGrupoById(body.id);
    return this.successList(resp);
  }
  @Post('/listarGrupo')
  async listarGrupos(@Body() body) {
    const resp = await this.grupoService.listarGrupoporCatalogoTramite(
      body.idCatalogoTramite,
    );
    return this.successList(resp);
  }
  @Patch('/updateGrupo')
  async updateGrupo(@Body() body, @Req() req) {
    const { id, grupo, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = this.grupoService.updateGrupo(id, grupo, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteGrupo')
  async deleteGrupo(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.grupoService.deleteGrupo(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
  @Get('/getGSC')
  async getAllGrupoSeccionCampo() {
    const resp = await this.grupoService.getGropowithRelations();
    return this.successList(resp);
  }
}
