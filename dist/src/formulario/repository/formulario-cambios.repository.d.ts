import { Repository } from 'typeorm';
import { CreateFormularioDto } from '../dto/create-formulario.dto';
import { Formulario } from '../entities/formulario.entity';
export declare class FormularioCambiosRepository extends Repository<Formulario> {
    createRegistroCambios(formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").InsertResult>;
}
