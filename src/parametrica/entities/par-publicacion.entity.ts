import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Parametrica } from './parametrica.entity';

import { Status } from 'src/common/constants/index';

@Entity('par_publicaciones', {
  schema: process.env.DB_SCHEMA_PARAMETRICA,
})
export class ParPublicacion extends AbstractEntityEmpresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campo: string;

  @Column()
  tipo: string;

  @Column({ name: 'codigo_publicacion' })
  codigoPublicacion: string;

  @Column({
    type: 'enum',
    enum: Status,
  })
  estado: Status;

  @Column({ name: 'id_catalogo_tramite' })
  idCatalogoTramite: number;

  @ManyToOne(
    () => Parametrica,
    (catalogoTramite) => catalogoTramite.parPublicaciones,
  )
  @JoinColumn({
    name: 'id_catalogo_tramite',
    referencedColumnName: 'id',
  })
  catalogoTramite: Parametrica;
}
