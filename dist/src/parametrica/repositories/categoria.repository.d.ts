import { CategoriaDto } from '../dto/create-categoria.dto';
import { ParametricaCategoria } from '../entities/parametrica-categoria.entity';
import { Repository } from 'typeorm';
export declare class CategoriaRepository extends Repository<ParametricaCategoria> {
    createCategoria(categoria: CategoriaDto): Promise<import("typeorm").InsertResult>;
    updateCategoria(idc: number, categoria: CategoriaDto): Promise<import("typeorm").UpdateResult>;
    getAllCategoria(): Promise<ParametricaCategoria[]>;
    getCategoriaById(id: number): Promise<ParametricaCategoria>;
    removeCategoria(id: number): Promise<import("typeorm").UpdateResult>;
}
