import { AbstractEntity } from 'src/common/dto/abstract-entity.dto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { ParametricaCategoria } from './parametrica-categoria.entity';
import { Arancel } from './arancel.entity';
import { DocumentoEmitido } from './documento-emitido.entity';
import { ParPublicacion } from './par-publicacion.entity';
import { Grupo } from './grupo.entity';

import {
  Status,
  TramiteParametricaTipo,
  TramiteParametricaTipoCatalogo,
} from 'src/common/constants/index';

@Entity('catalogo_tramites', { schema: process.env.DB_SCHEMA_PARAMETRICA })
export class Parametrica extends AbstractEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  estado: Status;

  @Column({
    type: 'enum',
    enum: TramiteParametricaTipo,
  })
  tipo: TramiteParametricaTipo;

  @Column({
    name: 'tipo_catalogo',
    type: 'enum',
    enum: TramiteParametricaTipoCatalogo,
    default: TramiteParametricaTipoCatalogo.TRAMITE,
  })
  tipoCatalogo: TramiteParametricaTipoCatalogo;

  @Column('text', {
    array: true,
    name: 'tipo_societario_habilitado',
    nullable: true,
  })
  tipoSocietarioHabilitado: string[];

  @Column('text', {
    array: true,
    name: 'tipo_tramite_habilitado',
    nullable: true,
  })
  tipoTramiteHabilitado: string[];

  @Column()
  version: string;

  @Column({ name: 'requiere_registrar_editar_seccion', default: false })
  requiereRegistrarEditarSeccion: boolean;

  @Column({ name: 'requiere_pago' })
  requierePago: boolean;

  @Column({ name: 'requiere_presentacion', default: true })
  requierePresentacion: boolean; // tecnico ventanilla

  @Column({ name: 'requiere_revision', default: true })
  requiereRevision: boolean; // tecnico juridico

  @Column()
  duracion: number;

  @Column({ nullable: true })
  api: string;

  @Column({ name: 'ruta_front', nullable: true })
  rutaFront: string;

  @Column({ name: 'pre_ruta_front', nullable: true })
  preRutaFront: string;

  @Column({ name: 'ruta_inicio_front', nullable: true })
  rutaInicioFront: string;

  @Column({ name: 'requiere_matricula_vigente', default: false })
  requiereMatriculaVigente: boolean;

  @Column('jsonb', { name: 'kardex', nullable: true })
  kardex: Record<string, unknown>; // { tipoDocumento, libro, acto }

  @Column({ name: 'metodo_obtener_informacion', nullable: true })
  metodoObtenerInformacion: string;

  @Column({ name: 'metodo_validar_datos', nullable: true })
  metodoValidarDatos: string;

  @Column({ name: 'metodo_despues_del_pago', nullable: true })
  metodoDespuesDelPago: string;

  @Column({ name: 'metodo_volcar_datos', nullable: true })
  metodoVolcarDatos: string;

  @Column({ name: 'metodo_publicar', nullable: true })
  metodoPublicar: string;

  @Column({ name: 'metodo_generar_certificado', nullable: true })
  metodoGenerarCertificado: string;

  // transient
  @Column({ name: 'id_tramite_parametrica_categoria' })
  idParametricaCategoria: number;

  // @OneToMany(() => Tramite, (tramite) => tramite.parametrica)
  // tramites: Tramite[];

  @ManyToOne(
    () => ParametricaCategoria,
    (parametricaCategoria) => parametricaCategoria.parametricas,
  )
  @JoinColumn({
    name: 'id_tramite_parametrica_categoria',
    referencedColumnName: 'id',
  })
  parametricaCategoria: ParametricaCategoria;

  @OneToMany(() => Arancel, (arancel) => arancel.catalogoTramite)
  aranceles: Arancel[];

  @OneToMany(
    () => DocumentoEmitido,
    (documentosEmitidos) => documentosEmitidos.catalogoTramite,
  )
  documentosEmitidos: DocumentoEmitido[];

  @OneToMany(
    () => ParPublicacion,
    (parPublicacion) => parPublicacion.catalogoTramite,
  )
  parPublicaciones: ParPublicacion[];

  @OneToMany(() => Grupo, (grupo) => grupo.catalogoTramite)
  grupos: Grupo[];

  // @OneToMany(() => TramiteTmp, (tramiteTmp) => tramiteTmp.catalogoTramite)
  // tramitesTmp: TramiteTmp[];
}
