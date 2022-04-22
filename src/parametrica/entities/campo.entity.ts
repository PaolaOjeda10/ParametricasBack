import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Seccion } from './seccion.entity';
import { Status } from 'src/common/constants/index';

@Entity('campos', {
  schema: process.env.DB_SCHEMA_PARAMETRICA,
})
export class Campo extends AbstractEntityEmpresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campo: string;

  @Column()
  tipo: string;

  @Column()
  label: string;

  @Column({ nullable: true })
  tooltip: string;

  @Column()
  orden: number;

  @Column({ nullable: true })
  iop: string;

  @Column({ nullable: true })
  desabilitado: boolean;

  @Column({ name: 'valor_defecto', nullable: true })
  valorDefecto: string;

  @Column('simple-array', { name: 'validacion', nullable: true })
  validacion: string[];

  @Column({ nullable: true })
  parametrica: string;

  @Column({ name: 'parametrica_text', nullable: true })
  parametricaText: string;

  @Column({ name: 'campo_padre', nullable: true })
  campoPadre: string;

  @Column({ name: 'campo_hijo', nullable: true })
  campoHijo: string;

  @Column({ name: 'observable', nullable: true, default: true })
  observable: boolean;

  @Column({ nullable: true })
  filtro: string;

  @Column('jsonb', { name: 'max_min_fecha', nullable: true })
  maxMinFecha: Record<string, unknown>;

  @Column()
  size: number;

  @Column()
  tabla: string;

  @Column({ name: 'cantiad_max' })
  cantidadMax: number;

  @Column({ name: 'docuemnto_soporte', nullable: true })
  documentoSoporte: boolean;

  @Column({ name: 'codigo_tipo_documento', nullable: true })
  codigoTipoDocumento: string;

  @Column({ name: 'criterio_opcional', nullable: true })
  criterioOpcional: string;

  @Column({ name: 'codigo_tipo_publicacion', nullable: true })
  codigoTipoPublicacion: string;

  @Column('jsonb', { name: 'kardex', nullable: true })
  kardex: Record<string, unknown>; // { tipoDocumento, libro, acto }

  @Column({ name: 'grupo_parametrica', nullable: true })
  grupoParametrica: string;

  @Column({
    type: 'enum',
    enum: Status,
  })
  estado: Status;

  @Column({ name: 'id_seccion', nullable: false })
  idSeccion: number;

  @ManyToOne(() => Seccion, (seccion) => seccion.campos)
  @JoinColumn({
    name: 'id_seccion',
    referencedColumnName: 'id',
  })
  seccion: Seccion;

  // transient
  valor: string;
}
