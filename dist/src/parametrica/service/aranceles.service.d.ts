import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { ArancelDto } from '../dto/aranceles.dto';
import { ArancelRepository } from '../repositories/aranceles.repository';
export declare class ArancelesService {
    private arancelRepository;
    private cambioRepository;
    constructor(arancelRepository: ArancelRepository, cambioRepository: FormularioCambiosRepository);
    createArancel(arancel: ArancelDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").InsertResult;
    }>;
    updateArancel(id: number, arancel: ArancelDto, { formulario, usuarioAuditoria }: {
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
    getAllArancel(): Promise<import("../entities/arancel.entity").Arancel[]>;
    getArancel(id: number): Promise<import("../entities/arancel.entity").Arancel>;
    listarArancelporIdCatalogoTramite(idCatalogoTramite: any): Promise<import("../entities/arancel.entity").Arancel[]>;
    deleteArancel(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
}
