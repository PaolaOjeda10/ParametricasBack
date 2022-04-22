import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CatalogoTramiteDto } from '../dto/create-categoria-tramite.dto';
import { CategoriaTramiteRepository } from '../repositories/catalogo.tramite.repository';

@Injectable()
export class CatalogoTramiteService {
  constructor(
    @InjectRepository(CategoriaTramiteRepository)
    private catTramiteRepository: CategoriaTramiteRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createCatalogoTramite(
    catalogoTramite: CatalogoTramiteDto,
    { formulario, usuarioAuditoria },
  ) {
    try {
      const { id } = catalogoTramite;
      const registro = await this.catTramiteRepository.getCatalogoTramiteById(
        id,
      );
      if (registro) {
        throw new NotFoundException(`Existe un registro con ID #${id}`);
      }
      const resp = await this.catTramiteRepository.createCategoriaTramite(
        catalogoTramite,
      );
      // formulario.cambio.id = resp.identifiers[0].id;
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
  async getAllCatalogoTramite() {
    return await this.catTramiteRepository.getAllCatalogoTramite();
  }
  async getCatalogoTramiteById(id: number) {
    const catTram = await this.catTramiteRepository.getCatalogoTramiteById(id);
    if (!catTram) {
      throw new NotFoundException(`Catalogo Tramite con #${id} no encontrado`);
    }
    return catTram;
  }
  async updateCatalogoTramite(
    id: number,
    catalogoTramite: CatalogoTramiteDto,
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
    const catTram = await this.catTramiteRepository.getCatalogoTramiteById(id);
    if (!catTram) {
      throw new NotFoundException(`Catalogo Tramite con #${id} no encontrado`);
    }
    const response = await this.catTramiteRepository.updateCatalogoTramite(
      id,
      catalogoTramite,
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
  async deleteCategoriaTramite(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.catTramiteRepository.getCatalogoTramiteById(id);
    if (!cat) {
      throw new NotFoundException(`Categoria Tramite con #${id} no encontrado`);
    }
    const response = await this.catTramiteRepository.removeCatalogoTramite(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
  async getAllCatalogoTramiteRelations() {
    return await this.catTramiteRepository.getDataRelaciones();
  }
}
