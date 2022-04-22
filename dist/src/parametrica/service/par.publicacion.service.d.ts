import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { ParPublicacionDto } from '../dto/par.publicacion.dto';
import { ParPublicacionRepository } from '../repositories/par.publicacion.repository';
export declare class ParPublicacionService {
    private parpublicacionRepository;
    private cambioRepository;
    constructor(parpublicacionRepository: ParPublicacionRepository, cambioRepository: FormularioCambiosRepository);
    createParPublicaciones(publicacion: ParPublicacionDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    updateParPublicacion(id: number, publicacion: ParPublicacionDto, { formulario, usuarioAuditoria }: {
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
    getAllParPublicacion(): Promise<import("../entities/par-publicacion.entity").ParPublicacion[]>;
    getParPublicacion(id: number): Promise<import("../entities/par-publicacion.entity").ParPublicacion>;
    listarParPublicacionporCatalogoTramite(idCatalogoTramite: any): Promise<import("../entities/par-publicacion.entity").ParPublicacion[]>;
    deleteParPublicacion(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
}
