import { Status } from 'src/common/constants';
import { Parametrica } from '../entities/parametrica.entity';
export declare class ParPublicacionDto {
    campo: string;
    tipo: string;
    codigoPublicacion: string;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
