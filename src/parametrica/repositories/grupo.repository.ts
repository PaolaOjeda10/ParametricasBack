import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { GrupoDto } from '../dto/grupo.dto';
import { Grupo } from '../entities/grupo.entity';
@EntityRepository(Grupo)
export class GrupoRepository extends Repository<Grupo> {
  async createGrupo(grupo: GrupoDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Grupo)
      .values({
        ...grupo,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateGrupo(idg: number, grupo: GrupoDto) {
    return await this.update(idg, grupo);
  }
  async getAllGrupo() {
    return await this.find({
      relations: ['secciones'],
      order: { id: 'ASC' },
    });
  }
  async getGrupoById(id: number) {
    return await this.findOne(id);
  }
  async listarGrupoporCatalogoTramite(idCatalogoTramite) {
    return await this.find({
      where: {
        idCatalogoTramite: idCatalogoTramite,
      },
      order: {
        id: 'ASC',
      },
    });
  }
  async removeGrupo(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
  async listarGrupoSeccionCampo() {
    const query = this.createQueryBuilder('g')
      .leftJoinAndSelect('g.secciones', 's')
      .leftJoinAndSelect('s.campos', 'c');
    return query.getMany();
  }
}
