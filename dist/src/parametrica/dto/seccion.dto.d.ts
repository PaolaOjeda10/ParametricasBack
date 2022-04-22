import { Status } from 'src/common/constants';
import { Campo } from '../entities/campo.entity';
import { Grupo } from '../entities/grupo.entity';
export declare class SeccionDto {
    nombre: string;
    descripcion: string;
    orden: number;
    estado: Status;
    idGrupo: number;
    grupo: Grupo;
    campos: Campo[];
}
