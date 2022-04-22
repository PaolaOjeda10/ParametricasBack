import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { DocumentoEmitdoService } from '../service/documento.emitido.service';
export declare class DocumentoEmitidoController extends AbstractController {
    private readonly documentoService;
    constructor(documentoService: DocumentoEmitdoService);
    addDocumento(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllDocumentoEmitido(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getDocumentoById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarDocumentosEmitidosporCatalogoTramite(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateDocumentoEmitido(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteDocumentoEmitido(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
