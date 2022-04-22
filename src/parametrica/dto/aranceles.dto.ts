import { Status } from 'src/common/constants';
import { Parametrica } from '../entities/parametrica.entity';

export class ArancelDto {
  // id: number;
  monto: number;
  tipo: string;
  funcionDependiente: string;
  codTipoSocietario: string;
  estado: Status;
  idCatalogoTramite: number;
  catalogoTramite: Parametrica;
}
