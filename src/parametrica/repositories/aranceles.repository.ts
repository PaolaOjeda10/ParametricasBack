import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { ArancelDto } from '../dto/aranceles.dto';
import { Arancel } from '../entities/arancel.entity';

@EntityRepository(Arancel)
export class ArancelRepository extends Repository<Arancel> {
  async createArancel(arancelDto: ArancelDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Arancel)
      .values({
        ...arancelDto,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateArancel(id: number, arancelDto: ArancelDto) {
    return await this.update(id, { ...arancelDto, usuarioActualizacion: '1' });
  }
  async getAllArancel() {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }
  async getArancelById(id: number) {
    return await this.findOne(id);
  }
  async buscarArancel(cod: string, id: number) {
    return await this.findOne({
      where: {
        idCatalogoTramite: id,
        codTipoSocietario: cod,
      },
    });
  }
  async listarArancel(idCatalogoTramite: number) {
    return await this.find({
      where: {
        idCatalogoTramite: idCatalogoTramite,
      },
      order: {
        id: 'ASC',
      },
    });
  }
  async removeArancel(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
