import { Repository } from 'typeorm';
import { GrupoDto } from '../dto/grupo.dto';
import { Grupo } from '../entities/grupo.entity';
export declare class GrupoRepository extends Repository<Grupo> {
    createGrupo(grupo: GrupoDto): Promise<import("typeorm").InsertResult>;
    updateGrupo(idg: number, grupo: GrupoDto): Promise<import("typeorm").UpdateResult>;
    getAllGrupo(): Promise<Grupo[]>;
    getGrupoById(id: number): Promise<Grupo>;
    listarGrupoporCatalogoTramite(idCatalogoTramite: any): Promise<Grupo[]>;
    removeGrupo(id: number): Promise<import("typeorm").UpdateResult>;
    listarGrupoSeccionCampo(): Promise<Grupo[]>;
}
