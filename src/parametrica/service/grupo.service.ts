import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { GrupoDto } from '../dto/grupo.dto';
import { GrupoRepository } from '../repositories/grupo.repository';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(GrupoRepository)
    private grupoRepository: GrupoRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createGrupo(grupo: GrupoDto, { formulario, usuarioAuditoria }) {
    try {
      const resp = await this.grupoRepository.createGrupo(grupo);
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
  async listarGrupoporCatalogoTramite(idCatalogoTramite) {
    const resp = await this.grupoRepository.listarGrupoporCatalogoTramite(
      idCatalogoTramite,
    );
    return resp;
  }
  async updateGrupo(
    id: number,
    grupo: GrupoDto,
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
    const gp = await this.grupoRepository.getGrupoById(id);
    if (!gp) {
      throw new NotFoundException(`Grupo con #${id} no encontrado`);
    }
    const response = await this.grupoRepository.updateGrupo(id, grupo);
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
  async getAllGrupo() {
    return await this.grupoRepository.getAllGrupo();
  }
  async getGrupoById(id: number) {
    const gp = await this.grupoRepository.getGrupoById(id);
    if (!gp) {
      throw new NotFoundException(`Grupo con #${id} no encontrado`);
    }
    return gp;
  }
  async deleteGrupo(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.grupoRepository.getGrupoById(id);
    if (!cat) {
      throw new NotFoundException(`Grupo con #${id} no encontrado`);
    }
    const response = await this.grupoRepository.removeGrupo(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
  async getGropowithRelations() {
    return await this.grupoRepository.listarGrupoSeccionCampo();
  }
}
