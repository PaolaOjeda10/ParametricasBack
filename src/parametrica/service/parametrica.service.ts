import {
  Injectable,
  NotFoundException,
  PreconditionFailedException,
  // UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CategoriaDto } from '../dto/create-categoria.dto';
import { CategoriaTramiteRepository } from '../repositories/catalogo.tramite.repository';
import { CategoriaRepository } from '../repositories/categoria.repository';
// const fs = require('fs');
@Injectable()
export class ParametricaService {
  constructor(
    @InjectRepository(CategoriaRepository)
    private categoriaRepository: CategoriaRepository,
    private catTramiteRepository: CategoriaTramiteRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createCategoria(
    categoria: CategoriaDto,
    { formulario, usuarioAuditoria },
  ) {
    const existe = await this.categoriaRepository.getCategoriaById(
      categoria.id,
    );
    if (existe) {
      throw new PreconditionFailedException(
        `ID #${categoria.id} ya Registrado`,
      );
    }
    const resp = await this.categoriaRepository.createCategoria(categoria);
    // formulario.cambio.id = resp.identifiers[0].id;
    if (resp) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return resp;
  }

  async getAllCategoria() {
    return await this.categoriaRepository.getAllCategoria();
  }

  async getCategoriaById(id: number) {
    const categoria = await this.categoriaRepository.getCategoriaById(id);
    if (!categoria) {
      throw new NotFoundException(`Categoria con #${id} no encontrado`);
    }
    return categoria;
  }

  async updateCategoria(
    id: number,
    categoria: CategoriaDto,
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
    if (categoria.id && id !== categoria.id) {
      const existe = await this.categoriaRepository.getCategoriaById(
        categoria.id,
      );
      if (existe) {
        throw new PreconditionFailedException(
          `ID #${categoria.id} ya Registrado`,
        );
      }
    }
    const cat = await this.categoriaRepository.getCategoriaById(id);
    if (!cat) {
      throw new NotFoundException(`Categoria con #${id} no encontrado`);
    }
    const resp = await this.categoriaRepository.updateCategoria(id, categoria);
    if (resp) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return { mensaje: 'Registro Actualizado', datos: resp, finalizado: true };
  }
  async deleteCategoria(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.categoriaRepository.getCategoriaById(id);
    if (!cat) {
      throw new NotFoundException(`Categoria con #${id} no encontrado`);
    }
    const resp = await this.categoriaRepository.removeCategoria(id);
    if (resp) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return resp;
  }
  async generarCsv() {
    try {
      await this.catTramiteRepository.generar('categorias');
      await this.catTramiteRepository.generar('catalogo_tramites');
      await this.catTramiteRepository.generar('aranceles');
      await this.catTramiteRepository.generar('documentos_emitidos');
      await this.catTramiteRepository.generar('par_publicaciones');
      await this.catTramiteRepository.generar('grupos');
      await this.catTramiteRepository.generar('campos');
      await this.catTramiteRepository.generar('secciones');
      return 'CSV Generados satisfactoriamente';
    } catch (error) {
      return error;
    }
  }
}
