import { Repository } from 'typeorm';
import { ArancelDto } from '../dto/aranceles.dto';
import { Arancel } from '../entities/arancel.entity';
export declare class ArancelRepository extends Repository<Arancel> {
    createArancel(arancelDto: ArancelDto): Promise<import("typeorm").InsertResult>;
    updateArancel(id: number, arancelDto: ArancelDto): Promise<import("typeorm").UpdateResult>;
    getAllArancel(): Promise<Arancel[]>;
    getArancelById(id: number): Promise<Arancel>;
    buscarArancel(cod: string, id: number): Promise<Arancel>;
    listarArancel(idCatalogoTramite: number): Promise<Arancel[]>;
    removeArancel(id: number): Promise<import("typeorm").UpdateResult>;
}
