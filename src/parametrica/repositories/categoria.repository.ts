import { CategoriaDto } from '../dto/create-categoria.dto';
import { ParametricaCategoria } from '../entities/parametrica-categoria.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Status } from 'src/common/constants';

@EntityRepository(ParametricaCategoria)
export class CategoriaRepository extends Repository<ParametricaCategoria> {
  async createCategoria(categoria: CategoriaDto) {
    const resp = await this.createQueryBuilder()
      .insert()
      .into(ParametricaCategoria)
      .values({
        ...categoria,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateCategoria(idc: number, categoria: CategoriaDto) {
    return await this.update(idc, { ...categoria, usuarioActualizacion: '1' });
  }
  async getAllCategoria() {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }
  async getCategoriaById(id: number) {
    return await this.findOne(id);
  }
  async removeCategoria(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
