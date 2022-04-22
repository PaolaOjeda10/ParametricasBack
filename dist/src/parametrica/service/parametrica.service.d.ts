import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { CategoriaDto } from '../dto/create-categoria.dto';
import { CategoriaTramiteRepository } from '../repositories/catalogo.tramite.repository';
import { CategoriaRepository } from '../repositories/categoria.repository';
export declare class ParametricaService {
    private categoriaRepository;
    private catTramiteRepository;
    private cambioRepository;
    constructor(categoriaRepository: CategoriaRepository, catTramiteRepository: CategoriaTramiteRepository, cambioRepository: FormularioCambiosRepository);
    createCategoria(categoria: CategoriaDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    getAllCategoria(): Promise<import("../entities/parametrica-categoria.entity").ParametricaCategoria[]>;
    getCategoriaById(id: number): Promise<import("../entities/parametrica-categoria.entity").ParametricaCategoria>;
    updateCategoria(id: number, categoria: CategoriaDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        mensaje: string;
        datos: import("typeorm").UpdateResult;
        finalizado: boolean;
    }>;
    deleteCategoria(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
    generarCsv(): Promise<any>;
}
