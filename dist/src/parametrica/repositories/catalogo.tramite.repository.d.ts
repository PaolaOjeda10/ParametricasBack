import { Repository } from 'typeorm';
import { CatalogoTramiteDto } from '../dto/create-categoria-tramite.dto';
import { Parametrica } from '../entities/parametrica.entity';
export declare class CategoriaTramiteRepository extends Repository<Parametrica> {
    createCategoriaTramite(datos: CatalogoTramiteDto): Promise<import("typeorm").InsertResult>;
    getAllCatalogoTramite(): Promise<Parametrica[]>;
    getCatalogoTramiteById(id: number): Promise<Parametrica>;
    updateCatalogoTramite(idc: number, camps: CatalogoTramiteDto): Promise<import("typeorm").UpdateResult>;
    removeCatalogoTramite(id: number): Promise<import("typeorm").UpdateResult>;
    getDataRelaciones(): Promise<Parametrica[]>;
    generar(tabla: string): Promise<any>;
}
