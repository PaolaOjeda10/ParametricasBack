import { Repository } from 'typeorm';
import { DocumentoEmitidoDto } from '../dto/documento.emitido.dto';
import { DocumentoEmitido } from '../entities/documento-emitido.entity';
export declare class DocumentoEmitidoRepository extends Repository<DocumentoEmitido> {
    createDocumentoEmitido(documento: DocumentoEmitidoDto): Promise<import("typeorm").InsertResult>;
    updateDocumentoEmitido(idc: number, documento: DocumentoEmitidoDto): Promise<import("typeorm").UpdateResult>;
    getAllDocumentoEmitido(): Promise<DocumentoEmitido[]>;
    litarDocumentoporCatalogoTramite(idCatalogoTramite: any): Promise<DocumentoEmitido[]>;
    getDcoumentoEmitidoById(id: number): Promise<DocumentoEmitido>;
    removeDocumento(id: number): Promise<import("typeorm").UpdateResult>;
}
