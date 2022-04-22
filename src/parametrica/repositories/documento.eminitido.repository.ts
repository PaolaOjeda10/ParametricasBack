import { Status } from 'src/common/constants';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { DocumentoEmitidoDto } from '../dto/documento.emitido.dto';
import { DocumentoEmitido } from '../entities/documento-emitido.entity';

@EntityRepository(DocumentoEmitido)
export class DocumentoEmitidoRepository extends Repository<DocumentoEmitido> {
  async createDocumentoEmitido(documento: DocumentoEmitidoDto) {
    const resp = await getManager()
      .createQueryBuilder()
      .insert()
      .into(DocumentoEmitido)
      .values({
        ...documento,
        usuarioActualizacion: '1',
        usuarioCreacion: '1',
      })
      .execute();
    return resp;
  }
  async updateDocumentoEmitido(idc: number, documento: DocumentoEmitidoDto) {
    return await this.update(idc, { ...documento, usuarioActualizacion: '1' });
  }
  async getAllDocumentoEmitido() {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }
  async litarDocumentoporCatalogoTramite(idCatalogoTramite) {
    return await this.find({
      where: {
        idCatalogoTramite: idCatalogoTramite,
      },
      order: {
        id: 'ASC',
      },
    });
  }
  async getDcoumentoEmitidoById(id: number) {
    return await this.findOne(id);
  }
  async removeDocumento(id: number) {
    return await this.update(id, { estado: Status.INACTIVE });
  }
}
