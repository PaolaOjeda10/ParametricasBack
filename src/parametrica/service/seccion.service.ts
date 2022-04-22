import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { SeccionDto } from '../dto/seccion.dto';
import { SeccionRepository } from '../repositories/seccion.repository';

@Injectable()
export class SeccionService {
  constructor(
    @InjectRepository(SeccionRepository)
    private seccionRepository: SeccionRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createSeccion(seccion: SeccionDto, { formulario, usuarioAuditoria }) {
    try {
      const sec = await this.seccionRepository.createSeccion(seccion);
      formulario.cambio.id = sec.identifiers[0].id;
      if (sec) {
        await this.cambioRepository.createRegistroCambios(
          formulario,
          usuarioAuditoria,
        );
      }
      return sec;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async listarSeccionporGrupo(idGrupo) {
    const resp = await this.seccionRepository.listarSeccionporGrupo(idGrupo);
    return resp;
  }
  async updateSeccion(
    id: number,
    seccion: SeccionDto,
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
    const sec = await this.seccionRepository.getSeccionById(id);
    if (!sec) {
      throw new NotFoundException(`Seccion con #${id} no encontrado`);
    }
    const response = await this.seccionRepository.update(id, seccion);
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
  async getAllSeccion() {
    return await this.seccionRepository.getAllSeccion();
  }
  async getSeccionById(id: number) {
    const sec = await this.seccionRepository.getSeccionById(id);
    if (!sec) {
      throw new NotFoundException(`Seccion con #${id} no encontrado`);
    }
    return sec;
  }
  async deleteSeccion(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.seccionRepository.getSeccionById(id);
    if (!cat) {
      throw new NotFoundException(`Grupo con #${id} no encontrado`);
    }
    const response = await this.seccionRepository.removeSeccion(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
}
