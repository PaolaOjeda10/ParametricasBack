import { Parametrica } from './parametrica.entity';
import { Status } from '../../common/constants/index';
import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
export declare class Arancel extends AbstractEntityEmpresa {
    id: number;
    monto: number;
    tipo: string;
    funcionDependiente: string;
    codTipoSocietario: string;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
