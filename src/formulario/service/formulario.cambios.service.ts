import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormularioDto } from '../dto/create-formulario.dto';
import { FormularioCambiosRepository } from '../repository/formulario-cambios.repository';

@Injectable()
export class FormularioCambiosService {
  constructor(
    @InjectRepository(FormularioCambiosRepository)
    private cambiosRepository: FormularioCambiosRepository,
  ) {}
  async crear(formulario: CreateFormularioDto, usuarioAuditoria: string) {
    try {
      const resp = await this.cambiosRepository.createRegistroCambios(
        formulario,
        usuarioAuditoria,
      );
      return resp;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
