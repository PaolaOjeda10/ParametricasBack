import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { CamposService } from '../service/campos.service';
export declare class CampoController extends AbstractController {
    private readonly campoService;
    constructor(campoService: CamposService);
    addCampo(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllCampo(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarCampos(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getCampoById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateCampo(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteCampo(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
