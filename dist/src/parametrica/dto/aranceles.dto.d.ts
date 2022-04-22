import { Status } from 'src/common/constants';
import { Parametrica } from '../entities/parametrica.entity';
export declare class ArancelDto {
    monto: number;
    tipo: string;
    funcionDependiente: string;
    codTipoSocietario: string;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
