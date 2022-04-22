import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { CatalogoTramiteService } from '../service/catalogo.tramite.service';
export declare class CatalogoTramiteController extends AbstractController {
    private readonly catalogoTramService;
    constructor(catalogoTramService: CatalogoTramiteService);
    addCatTramite(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getDataCatalogoTramite(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllCatTramite(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getTramiteById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateCatTramite(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteCatalogoTramite(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
