import { Status } from '../../common/constants';
import { AbstractEntityEmpresa } from '../../common/dto/abstract-entity-empresa.dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('cambios', { schema: process.env.DB_SCHEMA_EMPRESA })
export class Formulario extends AbstractEntityEmpresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tabla: string;

  @Column('jsonb', { name: 'cambio', nullable: true })
  cambio: Record<string, unknown>;

  @Column({
    type: 'enum',
    enum: Status,
  })
  estado: Status;

  @Column({
    name: 'usuario_base',
  })
  usuarioBase: string;

  @Column({
    name: 'usuario_aplicacion',
  })
  usuarioAplicacion: string;
}
