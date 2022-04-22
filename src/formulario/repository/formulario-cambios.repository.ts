import { Status } from '../../common/constants';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { CreateFormularioDto } from '../dto/create-formulario.dto';
import { Formulario } from '../entities/formulario.entity';

@EntityRepository(Formulario)
export class FormularioCambiosRepository extends Repository<Formulario> {
  async createRegistroCambios(
    formulario: CreateFormularioDto,
    usuarioAuditoria: string,
  ) {
    const { tabla, cambio } = formulario;
    const resp = await getRepository(Formulario)
      .createQueryBuilder()
      .insert()
      .into(Formulario)
      .values({
        tabla: tabla,
        cambio: cambio,
        estado: Status.ACTIVE,
        usuarioCreacion: usuarioAuditoria || '1',
        usuarioAplicacion: usuarioAuditoria || '',
        usuarioBase: () => 'USER',
      })
      .execute();
    return resp;
  }
}
