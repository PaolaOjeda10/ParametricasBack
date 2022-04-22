import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CamposDto } from '../dto/campos.dto';
import { CampoRepository } from '../repositories/campos.repository';

@Injectable()
export class CamposService {
  constructor(
    @InjectRepository(CampoRepository)
    private campoRepository: CampoRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createCampo(campo: CamposDto, { formulario, usuarioAuditoria }) {
    try {
      const resp = await this.campoRepository.createCampo(campo);
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
  async updateCampo(
    id: number,
    campo: CamposDto,
    { formulario, usuarioAuditoria },
  ) {
    const camp = await this.campoRepository.getCampoBydId(id);
    if (!camp) {
      throw new NotFoundException(`Campo con #${id} no encontrado`);
    }
    const c = Object.keys(formulario.cambio);
    if (c.length === 1) {
      return {
        finalizado: true,
        mensaje: 'Sin Cambios',
        datos: {},
      };
    }
    const response = await this.campoRepository.updateCampo(id, campo);
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
  async listarCampoporSeccion(idSeccion) {
    const resp = await this.campoRepository.listarCampoporSeccion(idSeccion);
    return resp;
  }
  async getAllCampos() {
    return await this.campoRepository.getAllCampos();
  }
  async getCampoById(id: number) {
    return await this.campoRepository.getCampoBydId(id);
  }
  async deleteCampo(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.campoRepository.getCampoBydId(id);
    if (!cat) {
      throw new NotFoundException(`Grupo con #${id} no encontrado`);
    }
    const response = await this.campoRepository.removeCampo(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
}
