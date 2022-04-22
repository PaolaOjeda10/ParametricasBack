import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { SeccionDto } from '../dto/seccion.dto';
import { SeccionRepository } from '../repositories/seccion.repository';
export declare class SeccionService {
    private seccionRepository;
    private cambioRepository;
    constructor(seccionRepository: SeccionRepository, cambioRepository: FormularioCambiosRepository);
    createSeccion(seccion: SeccionDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    listarSeccionporGrupo(idGrupo: any): Promise<import("../entities/seccion.entity").Seccion[]>;
    updateSeccion(id: number, seccion: SeccionDto, { formulario, usuarioAuditoria }: {
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
    getAllSeccion(): Promise<import("../entities/seccion.entity").Seccion[]>;
    getSeccionById(id: number): Promise<import("../entities/seccion.entity").Seccion>;
    deleteSeccion(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
}
