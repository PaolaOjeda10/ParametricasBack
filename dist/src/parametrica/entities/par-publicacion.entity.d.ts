import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import { Parametrica } from './parametrica.entity';
import { Status } from 'src/common/constants/index';
export declare class ParPublicacion extends AbstractEntityEmpresa {
    id: number;
    campo: string;
    tipo: string;
    codigoPublicacion: string;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
