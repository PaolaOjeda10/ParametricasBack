import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { ArancelesService } from '../service/aranceles.service';
export declare class ArancelesController extends AbstractController {
    private readonly aranceleService;
    constructor(aranceleService: ArancelesService);
    addArancel(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllArancel(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarArancelporIdCatalogoTramite(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getArancelById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateArancel(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteArancel(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
