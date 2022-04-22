import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { GrupoDto } from '../dto/grupo.dto';
import { GrupoRepository } from '../repositories/grupo.repository';
export declare class GrupoService {
    private grupoRepository;
    private cambioRepository;
    constructor(grupoRepository: GrupoRepository, cambioRepository: FormularioCambiosRepository);
    createGrupo(grupo: GrupoDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    listarGrupoporCatalogoTramite(idCatalogoTramite: any): Promise<import("../entities/grupo.entity").Grupo[]>;
    updateGrupo(id: number, grupo: GrupoDto, { formulario, usuarioAuditoria }: {
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
    getAllGrupo(): Promise<import("../entities/grupo.entity").Grupo[]>;
    getGrupoById(id: number): Promise<import("../entities/grupo.entity").Grupo>;
    deleteGrupo(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
    getGropowithRelations(): Promise<import("../entities/grupo.entity").Grupo[]>;
}
