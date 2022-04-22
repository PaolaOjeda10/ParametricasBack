import { Seccion } from './seccion.entity';
import { Parametrica } from './parametrica.entity';
import { Status } from '../../common/constants/index';
import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
export declare class Grupo extends AbstractEntityEmpresa {
    id: number;
    nombre: string;
    codigo: string;
    descripcion: string;
    orden: number;
    flujo: string;
    estado: Status;
    documentoSoporte: boolean;
    aprobacionDocumentos: boolean;
    pago: boolean;
    idCatalogoTramite: number;
    catalogoTramite: Parametrica;
    secciones: Seccion[];
}
