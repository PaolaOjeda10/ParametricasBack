// import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Parametrica } from './parametrica.entity';

import { Status } from '../../common/constants/index';
import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';

@Entity('documentos_emitidos', {
  schema: process.env.DB_SCHEMA_PARAMETRICA,
})
export class DocumentoEmitido extends AbstractEntityEmpresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  tipo: string;

  @Column()
  plantilla: string;

  @Column('jsonb', { name: 'uso_qr' })
  usoQr: Record<string, unknown>;

  @Column({
    type: 'enum',
    enum: Status,
  })
  estado: Status;

  @Column({ name: 'id_catalogo_tramite' })
  idCatalogoTramite: number;

  @ManyToOne(
    () => Parametrica,
    (catalogoTramite) => catalogoTramite.documentosEmitidos,
  )
  @JoinColumn({
    name: 'id_catalogo_tramite',
    referencedColumnName: 'id',
  })
  catalogoTramite: Parametrica;
}
