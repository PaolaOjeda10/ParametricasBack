import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CatalogoTramiteDto } from '../dto/create-categoria-tramite.dto';
import { CategoriaTramiteRepository } from '../repositories/catalogo.tramite.repository';
export declare class CatalogoTramiteService {
    private catTramiteRepository;
    private cambioRepository;
    constructor(catTramiteRepository: CategoriaTramiteRepository, cambioRepository: FormularioCambiosRepository);
    createCatalogoTramite(catalogoTramite: CatalogoTramiteDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    getAllCatalogoTramite(): Promise<import("../entities/parametrica.entity").Parametrica[]>;
    getCatalogoTramiteById(id: number): Promise<import("../entities/parametrica.entity").Parametrica>;
    updateCatalogoTramite(id: number, catalogoTramite: CatalogoTramiteDto, { formulario, usuarioAuditoria }: {
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
    deleteCategoriaTramite(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
    getAllCatalogoTramiteRelations(): Promise<import("../entities/parametrica.entity").Parametrica[]>;
}
