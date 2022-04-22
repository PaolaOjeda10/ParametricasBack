import { Status } from 'src/common/constants';
import { Parametrica } from '../entities/parametrica.entity';
export declare class DocumentoEmitidoDto {
    nombre: string;
    tipo: string;
    plantilla: string;
    usoQr: Record<string, unknown>;
    estado: Status;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
}
