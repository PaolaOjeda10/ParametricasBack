import { CreateFormularioDto } from '../dto/create-formulario.dto';
import { FormularioCambiosRepository } from '../repository/formulario-cambios.repository';
export declare class FormularioCambiosService {
    private cambiosRepository;
    constructor(cambiosRepository: FormularioCambiosRepository);
    crear(formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").InsertResult>;
}
