import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { CatalogoTramiteDto } from '../dto/create-categoria-tramite.dto';
import { Parametrica } from '../entities/parametrica.entity';
// eslint-disable-next-line
const fs = require('fs');
@EntityRepository(Parametrica)
export class CategoriaTramiteRepository extends Repository<Parametrica> {
  async createCategoriaTramite(datos: CatalogoTramiteDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Parametrica)
      .values({
        ...datos,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async getAllCatalogoTramite() {
    return await this.find({
      order: { id: 'ASC' },
      relations: [
        'aranceles',
        'documentosEmitidos',
        'parPublicaciones',
        'grupos',
      ],
    });
  }
  async getCatalogoTramiteById(id: number) {
    return await this.findOne(id);
  }
  async updateCatalogoTramite(idc: number, camps: CatalogoTramiteDto) {
    return await this.update(idc, { ...camps, usuarioActualizacion: '1' });
  }
  async removeCatalogoTramite(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
  async getDataRelaciones() {
    const query = this.createQueryBuilder('catalogo_tramite')
      .leftJoinAndSelect('catalogo_tramite.documentosEmitidos', 'doc')
      .leftJoinAndSelect('catalogo_tramite.parPublicaciones', 'pub')
      .leftJoinAndSelect('catalogo_tramite.aranceles', 'aran')
      .leftJoinAndSelect('catalogo_tramite.grupos', 'group')
      .leftJoinAndSelect('group.secciones', 'sec')
      .leftJoinAndSelect('sec.campos', 'camp')
      .orderBy('catalogo_tramite.id', 'ASC');
    return query.getMany();
  }
  async generar(tabla: string) {
    try {
      const manager = getManager();
      const query = `COPY ${process.env.DB_SCHEMA_EMPRESA}.${tabla} TO '/tmp/${tabla}.csv' with csv`;
      const createcsv = await manager.query(query);
      const source = fs.createReadStream(`/tmp/${tabla}.csv`);
      const dest = fs.createWriteStream(
        `${process.env.PATH_EXPORT_CSV}/${tabla}.csv`,
      );
      source.pipe(dest);
      source.on('end', function () {
        console.log('Archivo copiado');
      });
      source.on('error', function (err) {
        console.log('Error:', err);
      });
      return createcsv;
    } catch (error) {
      return error;
    }
  }
}
