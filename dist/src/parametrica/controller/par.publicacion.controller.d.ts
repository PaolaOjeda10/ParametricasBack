import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { ParPublicacionService } from '../service/par.publicacion.service';
export declare class ParPublicacionController extends AbstractController {
    private readonly parpublicacionService;
    constructor(parpublicacionService: ParPublicacionService);
    addParPublicacion(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllParPublicacion(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getPublicacionById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarParPublicacionporCatalogoTramite(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateParPublicacion(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteParPublicacion(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
