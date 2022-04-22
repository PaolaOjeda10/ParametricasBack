import { Parametrica } from './parametrica.entity';
import { Status } from '../../common/constants/index';
import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
export declare class DocumentoEmitido extends AbstractEntityEmpresa {
    id: number;
    nombre: string;
    tipo: string;
    plantilla: string;
    usoQr: Record<string, unknown>;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
