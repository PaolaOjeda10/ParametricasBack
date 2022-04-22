import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import { Parametrica } from './parametrica.entity';
import { Status, TramiteParametricaTipoCatalogo } from '../../common/constants';
export declare class ParametricaCategoria extends AbstractEntityEmpresa {
    id: number;
    codigo: string;
    nombre: string;
    estado: Status;
    tipoCatalogo: TramiteParametricaTipoCatalogo;
    orden: number;
    parametricas: Parametrica[];
}
