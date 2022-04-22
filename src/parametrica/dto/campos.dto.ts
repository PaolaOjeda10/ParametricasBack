import { Status } from 'src/common/constants';
import { Seccion } from '../entities/seccion.entity';

export class CamposDto {
  // id: number;
  campo: string;
  tipo: string;
  label: string;
  tooltip: string;
  orden: number;
  iop: string;
  desabilitado: boolean;
  valorDefecto: string;
  validacion: string[];
  parametrica: string;
  parametricaText: string;
  campoPadre: string;
  campoHijo: string;
  observable: boolean;
  filtro: string;
  maxMinFecha: Record<string, unknown>;
  size: number;
  tabla: string;
  cantidadMax: number;
  documentoSoporte: boolean;
  codigoTipoDocumento: string;
  criterioOpcional: string;
  codigoTipoPublicacion: string;
  kardex: Record<string, unknown>;
  grupoParametrica: string;
  estado: Status;
  idSeccion: number;
  seccion: Seccion;
  valor: string;
}
