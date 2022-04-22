import { Status } from 'src/common/constants';
import { Parametrica } from '../entities/parametrica.entity';
import { Seccion } from '../entities/seccion.entity';

export class GrupoDto {
  // id: number;
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
