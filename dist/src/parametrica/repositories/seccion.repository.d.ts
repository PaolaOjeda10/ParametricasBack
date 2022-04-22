import { Repository } from 'typeorm';
import { SeccionDto } from '../dto/seccion.dto';
import { Seccion } from '../entities/seccion.entity';
export declare class SeccionRepository extends Repository<Seccion> {
    createSeccion(seccion: SeccionDto): Promise<import("typeorm").InsertResult>;
    updateSeccion(ids: number, seccion: SeccionDto): Promise<import("typeorm").UpdateResult>;
    getAllSeccion(): Promise<Seccion[]>;
    listarSeccionporGrupo(idGrupo: any): Promise<Seccion[]>;
    getSeccionById(id: number): Promise<Seccion>;
    removeSeccion(id: number): Promise<import("typeorm").UpdateResult>;
}
