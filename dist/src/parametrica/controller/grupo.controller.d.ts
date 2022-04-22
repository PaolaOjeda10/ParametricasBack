import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { GrupoService } from '../service/grupo.service';
export declare class GrupoController extends AbstractController {
    private readonly grupoService;
    constructor(grupoService: GrupoService);
    addGrupo(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllGrupo(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getGrupoById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarGrupos(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateGrupo(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteGrupo(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllGrupoSeccionCampo(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
