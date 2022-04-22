import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { CamposDto } from '../dto/campos.dto';
import { Campo } from '../entities/campo.entity';

@EntityRepository(Campo)
export class CampoRepository extends Repository<Campo> {
  async createCampo(campos: CamposDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Campo)
      .values({
        ...campos,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateCampo(idc: number, camps: CamposDto) {
    return await this.update(idc, camps);
  }

  async listarCampoporSeccion(idSeccion) {
    return await this.find({
      where: {
        idSeccion: idSeccion,
      },
      order: {
        id: 'ASC',
      },
    });
  }
  async getAllCampos() {
    return await this.find({
      relations: ['seccion'],
      order: {
        id: 'ASC',
      },
    });
  }
  async getCampoBydId(id: number) {
    return await this.findOne(id);
  }
  async removeCampo(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
