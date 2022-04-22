import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { SeccionDto } from '../dto/seccion.dto';
import { Seccion } from '../entities/seccion.entity';

@EntityRepository(Seccion)
export class SeccionRepository extends Repository<Seccion> {
  async createSeccion(seccion: SeccionDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Seccion)
      .values({
        ...seccion,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateSeccion(ids: number, seccion: SeccionDto) {
    return this.update(ids, seccion);
  }
  async getAllSeccion() {
    return await this.find({
      order: { id: 'ASC' },
    });
  }
  async listarSeccionporGrupo(idGrupo) {
    return await this.find({
      where: {
        idGrupo: idGrupo,
      },
      relations: ['grupo'],
      order: {
        id: 'ASC',
      },
    });
  }
  async getSeccionById(id: number) {
    return await this.findOne(id);
  }
  async removeSeccion(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
