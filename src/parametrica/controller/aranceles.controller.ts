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
import { ArancelesService } from '../service/aranceles.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('aranceles')
export class ArancelesController extends AbstractController {
  constructor(private readonly aranceleService: ArancelesService) {
    super();
  }
  @Post('/addArancel')
  async addArancel(@Body() body, @Req() req) {
    const { arancel, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.aranceleService.createArancel(arancel, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }
  @Get('/getArancel')
  async getAllArancel() {
    const resp = await this.aranceleService.getAllArancel();
    return this.successList(resp);
  }
  @Post('/listarArancelIdCatTramite')
  async listarArancelporIdCatalogoTramite(@Body() body) {
    const resp = await this.aranceleService.listarArancelporIdCatalogoTramite(
      body.idCatalogoTramite,
    );
    return this.successList(resp);
  }
  @Post('/getArancelId')
  async getArancelById(@Body() body) {
    const resp = await this.aranceleService.getArancel(body.id);
    return this.successList(resp);
  }
  @Patch('/updateArancel')
  async updateArancel(@Body() body, @Req() req) {
    // throw new Error('ok');
    const { id, arancel, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = this.aranceleService.updateArancel(id, arancel, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteArancel')
  async deleteArancel(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.aranceleService.deleteArancel(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
