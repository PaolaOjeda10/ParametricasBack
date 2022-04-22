import { Status } from 'src/common/constants';
import { Campo } from '../entities/campo.entity';
import { Grupo } from '../entities/grupo.entity';

export class SeccionDto {
  // id: number;
  nombre: string;
  descripcion: string;
  orden: number;
  estado: Status;
  idGrupo: number;
  grupo: Grupo;
  campos: Campo[];
}
