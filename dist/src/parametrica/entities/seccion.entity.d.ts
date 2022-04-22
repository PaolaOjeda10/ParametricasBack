import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import { Grupo } from './grupo.entity';
import { Campo } from './campo.entity';
import { Status } from 'src/common/constants/index';
export declare class Seccion extends AbstractEntityEmpresa {
    id: number;
    nombre: string;
    descripcion: string;
    orden: number;
    estado: Status;
    idGrupo: number;
    grupo: Grupo;
    campos: Campo[];
}
