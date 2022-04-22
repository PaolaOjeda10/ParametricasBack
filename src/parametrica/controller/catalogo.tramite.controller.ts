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
import { CatalogoTramiteService } from '../service/catalogo.tramite.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('catalogo-tramites')
export class CatalogoTramiteController extends AbstractController {
  constructor(private readonly catalogoTramService: CatalogoTramiteService) {
    super();
  }
  @Post('/addCatTramite')
  async addCatTramite(@Body() body, @Req() req) {
    const { catalogoTramite, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.catalogoTramService.createCatalogoTramite(
      catalogoTramite,
      { formulario, usuarioAuditoria: usuarioAuditoria },
    );
    return this.successCreate(resp);
  }
  @Get('/getDataCatalogoTramite')
  async getDataCatalogoTramite() {
    const resp =
      await this.catalogoTramService.getAllCatalogoTramiteRelations();
    return this.successList(resp);
  }
  @Get('/catTramite')
  async getAllCatTramite() {
    const resp = await this.catalogoTramService.getAllCatalogoTramite();
    return this.successList(resp);
  }
  @Post('/getTramiteId')
  async getTramiteById(@Body() body) {
    const resp = await this.catalogoTramService.getCatalogoTramiteById(body.id);
    return this.successList(resp);
  }
  @Patch('/updateCatalogoTramite')
  async updateCatTramite(@Body() body, @Req() req) {
    const { id, catTramite, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = this.catalogoTramService.updateCatalogoTramite(
      id,
      catTramite,
      { formulario, usuarioAuditoria: usuarioAuditoria },
    );
    return resp;
  }
  @Post('/deleteCatalogoTramite')
  async deleteCatalogoTramite(@Body() body, @Req() req) {
    // const usuarioAuditoria: any = this.getUserToken(req.headers.authorization);
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.catalogoTramService.deleteCategoriaTramite(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
