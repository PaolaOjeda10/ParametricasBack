import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { DocumentoEmitidoDto } from '../dto/documento.emitido.dto';
import { DocumentoEmitidoRepository } from '../repositories/documento.eminitido.repository';
export declare class DocumentoEmitdoService {
    private documentoRepository;
    private cambioRepository;
    constructor(documentoRepository: DocumentoEmitidoRepository, cambioRepository: FormularioCambiosRepository);
    createDocumentoEmitido(documento: DocumentoEmitidoDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<import("typeorm").InsertResult>;
    updateDocumentoEmitido(id: number, documento: DocumentoEmitidoDto, { formulario, usuarioAuditoria }: {
        formulario: any;
        usuarioAuditoria: any;
    }): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    getAllDocumento(): Promise<import("../entities/documento-emitido.entity").DocumentoEmitido[]>;
    getDocumentoEmitido(id: number): Promise<import("../entities/documento-emitido.entity").DocumentoEmitido>;
    listarDocumentoporCatalogoTramite(idCatalogoTramite: any): Promise<import("../entities/documento-emitido.entity").DocumentoEmitido[]>;
    deleteDocumentoEmitido(id: number, formulario: CreateFormularioDto, usuarioAuditoria: string): Promise<import("typeorm").UpdateResult>;
}
