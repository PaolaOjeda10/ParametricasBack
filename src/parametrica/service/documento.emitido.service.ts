import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { DocumentoEmitidoDto } from '../dto/documento.emitido.dto';
import { DocumentoEmitidoRepository } from '../repositories/documento.eminitido.repository';

@Injectable()
export class DocumentoEmitdoService {
  constructor(
    @InjectRepository(DocumentoEmitidoRepository)
    private documentoRepository: DocumentoEmitidoRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createDocumentoEmitido(
    documento: DocumentoEmitidoDto,
    { formulario, usuarioAuditoria },
  ) {
    try {
      const resp = await this.documentoRepository.createDocumentoEmitido(
        documento,
      );
      formulario.cambio.id = resp.identifiers[0].id;
      if (resp) {
        await this.cambioRepository.createRegistroCambios(
          formulario,
          usuarioAuditoria,
        );
      }
      return resp;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async updateDocumentoEmitido(
    id: number,
    documento: DocumentoEmitidoDto,
    { formulario, usuarioAuditoria },
  ) {
    const c = Object.keys(formulario.cambio);
    if (c.length === 1) {
      return {
        finalizado: true,
        mensaje: 'Sin Cambios',
        datos: {},
      };
    }
    const doc = await this.documentoRepository.getDcoumentoEmitidoById(id);
    if (!doc) {
      throw new NotFoundException(
        `Documento Emitido con #${id}, no encontrado`,
      );
    }
    const response = await this.documentoRepository.updateDocumentoEmitido(
      id,
      documento,
    );
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return {
      finalizado: true,
      mensaje: 'Actualizacion exitosa',
      datos: response,
    };
  }
  async getAllDocumento() {
    return await this.documentoRepository.getAllDocumentoEmitido();
  }
  async getDocumentoEmitido(id: number) {
    return await this.documentoRepository.getDcoumentoEmitidoById(id);
  }
  async listarDocumentoporCatalogoTramite(idCatalogoTramite) {
    const resp =
      await this.documentoRepository.litarDocumentoporCatalogoTramite(
        idCatalogoTramite,
      );
    return resp;
  }
  async deleteDocumentoEmitido(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.documentoRepository.getDcoumentoEmitidoById(id);
    if (!cat) {
      throw new NotFoundException(`Documento Emitido con #${id} no encontrado`);
    }
    const response = await this.documentoRepository.removeDocumento(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
}
