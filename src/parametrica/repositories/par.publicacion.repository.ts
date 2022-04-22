import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { ParPublicacionDto } from '../dto/par.publicacion.dto';
import { ParPublicacion } from '../entities/par-publicacion.entity';

@EntityRepository(ParPublicacion)
export class ParPublicacionRepository extends Repository<ParPublicacion> {
  async createParPublicacion(publicacion: ParPublicacionDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(ParPublicacion)
      .values({
        ...publicacion,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateParPublicacion(id: number, publicacion: ParPublicacionDto) {
    return await this.update(id, { ...publicacion, usuarioActualizacion: '1' });
  }
  async getAllParPublicacion() {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }
  async listarPublicacionporCatalogoTramite(idCatalogoTramite) {
    return await this.find({
      where: {
        idCatalogoTramite: idCatalogoTramite,
      },
      order: {
        id: 'ASC',
      },
    });
  }
  async getParPublicacionById(id: number) {
    return await this.findOne(id);
  }
  async removeParPublicacion(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
