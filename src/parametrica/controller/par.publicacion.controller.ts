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
import { ParPublicacionService } from '../service/par.publicacion.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('par-publicaciones')
export class ParPublicacionController extends AbstractController {
  constructor(private readonly parpublicacionService: ParPublicacionService) {
    super();
  }
  @Post('/addPublicacion')
  async addParPublicacion(@Body() body, @Req() req) {
    const { publicacion, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.parpublicacionService.createParPublicaciones(
      publicacion,
      { formulario, usuarioAuditoria: usuarioAuditoria },
    );
    return this.successCreate(resp);
  }
  @Get('/getParPublicaciones')
  async getAllParPublicacion() {
    const resp = await this.parpublicacionService.getAllParPublicacion();
    return this.successList(resp);
  }
  @Post('/getPublicacionId')
  async getPublicacionById(@Body() body) {
    const resp = await this.parpublicacionService.getParPublicacion(body.id);
    return this.successList(resp);
  }
  @Post('/listarPublicaciones')
  async listarParPublicacionporCatalogoTramite(@Body() body) {
    const resp =
      await this.parpublicacionService.listarParPublicacionporCatalogoTramite(
        body.idCatalogoTramite,
      );
    return this.successList(resp);
  }
  @Patch('/updatePublicacion')
  async updateParPublicacion(@Body() body, @Req() req) {
    const { id, publicacion, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.parpublicacionService.updateParPublicacion(
      id,
      publicacion,
      { formulario, usuarioAuditoria: usuarioAuditoria },
    );
    return resp;
  }
  @Post('/deletePublicacion')
  async deleteParPublicacion(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.parpublicacionService.deleteParPublicacion(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
