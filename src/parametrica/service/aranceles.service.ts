import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/constants/response-messages';
import { EntityNotFoundException } from 'src/common/exceptions/entity-not-found.exception';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { ArancelDto } from '../dto/aranceles.dto';
import { ArancelRepository } from '../repositories/aranceles.repository';

@Injectable()
export class ArancelesService {
  constructor(
    @InjectRepository(ArancelRepository)
    private arancelRepository: ArancelRepository,
    private cambioRepository: FormularioCambiosRepository,
  ) {}
  async createArancel(arancel: ArancelDto, { formulario, usuarioAuditoria }) {
    const { codTipoSocietario, idCatalogoTramite } = arancel;
    const arcl = await this.arancelRepository.buscarArancel(
      codTipoSocietario,
      idCatalogoTramite,
    );
    if (arcl) {
      throw new PreconditionFailedException(
        'Codigo Tipo Societario ya Asignado',
      );
      // return {
      //   finalizado: false,
      //   mensaje: 'Codigo Tipo Socetario ya Asignado',
      //   status: 412,
      // };
    }
    try {
      const resp = await this.arancelRepository.createArancel(arancel);
      formulario.cambio.id = resp.identifiers[0].id;
      if (resp) {
        await this.cambioRepository.createRegistroCambios(
          formulario,
          usuarioAuditoria,
        );
      }
      return {
        finalizado: true,
        mensaje: 'Registro exitoso',
        datos: resp,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  async updateArancel(
    id: number,
    arancel: ArancelDto,
    { formulario, usuarioAuditoria },
  ) {
    const { codTipoSocietario, idCatalogoTramite } = arancel;
    const arcls = await this.arancelRepository.buscarArancel(
      codTipoSocietario,
      idCatalogoTramite,
    );
    if (arcls && arcls.id !== id) {
      throw new PreconditionFailedException(
        'Codigo Tipo Societario ya Asignado',
      );
    }
    const c = Object.keys(formulario.cambio);
    if (c.length === 1) {
      return {
        finalizado: true,
        mensaje: 'Sin Cambios',
        datos: {},
      };
    }
    const arcl = await this.arancelRepository.getArancelById(id);
    //add cambio
    if (!arcl) {
      throw new EntityNotFoundException(Messages.EXCEPTION_NOT_FOUND);
    }
    const response = await this.arancelRepository.updateArancel(id, arancel);
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
  async getAllArancel() {
    return await this.arancelRepository.getAllArancel();
  }
  async getArancel(id: number) {
    return await this.arancelRepository.getArancelById(id);
  }
  async listarArancelporIdCatalogoTramite(idCatalogoTramite) {
    const resp = await this.arancelRepository.listarArancel(idCatalogoTramite);
    return resp;
  }
  async deleteArancel(
    id: number,
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const cat = await this.arancelRepository.getArancelById(id);
    if (!cat) {
      throw new NotFoundException(`Arancel con #${id} no encontrado`);
    }
    const response = await this.arancelRepository.removeArancel(id);
    if (response) {
      await this.cambioRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
    }
    return response;
  }
}
