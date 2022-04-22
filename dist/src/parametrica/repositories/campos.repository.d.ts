import { Repository } from 'typeorm';
import { CamposDto } from '../dto/campos.dto';
import { Campo } from '../entities/campo.entity';
export declare class CampoRepository extends Repository<Campo> {
    createCampo(campos: CamposDto): Promise<import("typeorm").InsertResult>;
    updateCampo(idc: number, camps: CamposDto): Promise<import("typeorm").UpdateResult>;
    listarCampoporSeccion(idSeccion: any): Promise<Campo[]>;
    getAllCampos(): Promise<Campo[]>;
    getCampoBydId(id: number): Promise<Campo>;
    removeCampo(id: number): Promise<import("typeorm").UpdateResult>;
}
