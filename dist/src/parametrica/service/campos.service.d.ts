import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CamposDto } from '../dto/campos.dto';
import { CampoRepository } from '../repositories/campos.repository';
export declare class CamposService {
    private campoRepository;
    private cambioRepository;
    constructor(campoRepository: CampoRepository, cambioRepository: FormularioCambiosRepository);
    createCampo(campo: CamposDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    updateCampo(id: number, campo: CamposDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    listarCampoporSeccion(idSeccion: any): Promise<import("../entities/campo.entity").Campo[]>;
    getAllCampos(): Promise<import("../entities/campo.entity").Campo[]>;
    getCampoById(id: number): Promise<import("../entities/campo.entity").Campo>;
    deleteCampo(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
}
