import { Repository } from 'typeorm';
import { ParPublicacionDto } from '../dto/par.publicacion.dto';
import { ParPublicacion } from '../entities/par-publicacion.entity';
export declare class ParPublicacionRepository extends Repository<ParPublicacion> {
    createParPublicacion(publicacion: ParPublicacionDto): Promise<import("typeorm").InsertResult>;
    updateParPublicacion(id: number, publicacion: ParPublicacionDto): Promise<import("typeorm").UpdateResult>;
    getAllParPublicacion(): Promise<ParPublicacion[]>;
    listarPublicacionporCatalogoTramite(idCatalogoTramite: any): Promise<ParPublicacion[]>;
    getParPublicacionById(id: number): Promise<ParPublicacion>;
    removeParPublicacion(id: number): Promise<import("typeorm").UpdateResult>;
}
