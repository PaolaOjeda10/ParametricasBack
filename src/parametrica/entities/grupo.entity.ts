import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seccion } from './seccion.entity';
import { Parametrica } from './parametrica.entity';
import { Status } from '../../common/constants/index';
import { AbstractEntityEmpresa } from 'src/common/dto/abstract-entity-empresa.dto';
@Entity('grupos', {
  schema: process.env.DB_SCHEMA_PARAMETRICA,
})
export class Grupo extends AbstractEntityEmpresa {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  codigo: string;

  @Column()
  descripcion: string;

  @Column()
  orden: number;

  @Column()
  flujo: string;

  @Column({
    type: 'enum',
    enum: Status,
  })
  estado: Status;

  @Column({ name: 'documento_soporte', default: false })
  documentoSoporte: boolean;

  @Column({ name: 'aprobacion_documentos', default: false })
  aprobacionDocumentos: boolean;

  @Column({ default: false })
  pago: boolean;

  @Column({ name: 'id_catalogo_tramite', nullable: false })
  idCatalogoTramite: number;

  @ManyToOne(() => Parametrica, (catalogoTramite) => catalogoTramite.grupos)
  @JoinColumn({
    name: 'id_catalogo_tramite',
    referencedColumnName: 'id',
  })
  catalogoTramite: Parametrica;

  @OneToMany(() => Seccion, (seccion) => seccion.grupo)
  secciones: Seccion[];
}
