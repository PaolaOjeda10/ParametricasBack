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
import { DocumentoEmitdoService } from '../service/documento.emitido.service';
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(new LoginInterceptor())
@Controller('documentos-emitidos')
export class DocumentoEmitidoController extends AbstractController {
  constructor(private readonly documentoService: DocumentoEmitdoService) {
    super();
  }
  @Post('/addDocumentoEmitido')
  async addDocumento(@Body() body, @Req() req) {
    const { documento, formulario } = body;
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.documentoService.createDocumentoEmitido(documento, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return this.successCreate(resp);
  }
  @Get('/getDocumentosEmitidos')
  async getAllDocumentoEmitido() {
    const resp = await this.documentoService.getAllDocumento();
    return this.successList(resp);
  }
  @Post('/getDocumentoId')
  async getDocumentoById(@Body() body) {
    const resp = await this.documentoService.getDocumentoEmitido(body.id);
    return this.successList(resp);
  }
  @Post('/listarDocumentos')
  async listarDocumentosEmitidosporCatalogoTramite(@Body() body) {
    const resp = await this.documentoService.listarDocumentoporCatalogoTramite(
      body.idCatalogoTramite,
    );
    return this.successList(resp);
  }
  @Patch('/updateDocumentoEmitido')
  async updateDocumentoEmitido(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const { id, documento, formulario } = body;
    const resp = this.documentoService.updateDocumentoEmitido(id, documento, {
      formulario,
      usuarioAuditoria: usuarioAuditoria,
    });
    return resp;
  }
  @Post('/deleteDocumentoEmitido')
  async deleteDocumentoEmitido(@Body() body, @Req() req) {
    const usuarioAuditoria = this.getUser(req);
    const resp = await this.documentoService.deleteDocumentoEmitido(
      body.id,
      body.formulario,
      usuarioAuditoria,
    );
    return this.successDelete(resp);
  }
}
