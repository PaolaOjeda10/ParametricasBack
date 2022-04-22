import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { LoginInterceptor } from '../interceptor/login.interceptor';
import { ParametricaService } from '../service/parametrica.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('parametrica')
export class ParametricaController extends AbstractController {
  constructor(private readonly parametricaService: ParametricaService) {
    super();
  }
  //CATEGORIA
  @Post('/add')
  async addCategoria(@Body() body, @Req() req) {
    const { catalogo, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.parametricaService.createCategoria(catalogo, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }

  @Get()
  async getAllCategoria() {
    const resp = await this.parametricaService.getAllCategoria();
    return this.successList(resp);
  }

  @Patch('/updateCatalogo')
  async updateCategoria(@Body() body, @Req() req) {
    const { id, categoria, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = this.parametricaService.updateCategoria(id, categoria, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteCatalogo')
  async deleteCategoriaById(@Body() body, @Req() req) {
    // console.log(this.getUserToken(req.headers.authorization));
    const usuarioAuditori = this.getUser(req);
    const resp = await this.parametricaService.deleteCategoria(
      body.id,
      body.formulario,
      usuarioAuditori,
    );
    return this.successDelete(resp);
  }
  @Post('/getCatalogoId')
  async getCatalogo(@Body() body) {
    const resp = await this.parametricaService.getCategoriaById(body.id);
    return this.successList(resp);
  }
  @Post('/buscarCatalogo')
  async getCategoriaById(@Body() body) {
    const resp = await this.parametricaService.getCategoriaById(body.id);
    return this.successList(resp);
  }
  //generar csv de las tablas
  @Get('/generarCSV')
  async generar() {
    const resp = await this.parametricaService.generarCsv();
    return this.successCreate(resp);
  }
}
