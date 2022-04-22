import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { ParPublicacionDto } from '../dto/par.publicacion.dto';
import { ParPublicacionRepository } from '../repositories/par.publicacion.repository';

@Injectable()
export class ParPublicacionService {
  constructor(
    @InjectRepository(ParPublicacionRepository)
    private parpublicacionRepository: ParPublicacionRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createParPublicaciones(
    publicacion: ParPublicacionDto,
    { formulario, usuarioAuditoria },
  ) {
    try {
      const resp = await this.parpublicacionRepository.createParPublicacion(
        publicacion,
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
  async updateParPublicacion(
    id: number,
    publicacion: ParPublicacionDto,
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
    const pub = await this.parpublicacionRepository.getParPublicacionById(id);
    if (!pub) {
      throw new NotFoundException(
        `Parametrica Publicacion con #${id} no encontrado`,
      );
    }
    const response = await this.parpublicacionRepository.updateParPublicacion(
      id,
      publicacion,
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
  async getAllParPublicacion() {
    return await this.parpublicacionRepository.getAllParPublicacion();
  }
  async getParPublicacion(id: number) {
    return await this.parpublicacionRepository.getParPublicacionById(id);
  }
  async listarParPublicacionporCatalogoTramite(idCatalogoTramite) {
    const resp =
      await this.parpublicacionRepository.listarPublicacionporCatalogoTramite(
        idCatalogoTramite,
      );
    return resp;
  }
  async deleteParPublicacion(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.parpublicacionRepository.getParPublicacionById(id);
    if (!cat) {
      throw new NotFoundException(`Par. Publicacion con #${id} no encontrado`);
    }
    const response = await this.parpublicacionRepository.removeParPublicacion(
      id,
    );
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
}
