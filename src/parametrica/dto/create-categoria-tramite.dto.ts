import {
  Status,
  TramiteParametricaTipo,
  TramiteParametricaTipoCatalogo,
} from 'src/common/constants';
export class CatalogoTramiteDto {
  id: number;
  nombre: string;
  codigo: string;
  estado: Status;
  tipo: TramiteParametricaTipo;
  tipoCatalogo: TramiteParametricaTipoCatalogo;
  tipoSocietarioHabilitado: string[];
  tipoTramiteHabilitado: string[];
  version: string;
  requiereRegistrarEditarSeccion: boolean;
  requierePago: boolean;
  requierePresentacion: boolean;
  requiereRevision: boolean;
  duracion: number;
  api: string;
  rutaFront: string;
  preRutaFront: string;
  rutaInicioFront: string;
  requiereMatriculaVigente: boolean;
  kardex: Record<string, unknown>;
  metodoObtenerInformacion: string;
  metodoValidarDatos: string;
  metodoDespuesDelPago: string;
  metodoVolcarDatos: string;
  metodoPublicar: string;
  metodoGenerarCertificado: string;
  idParametricaCategoria: number;
}
