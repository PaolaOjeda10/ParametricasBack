import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { SeccionService } from '../service/seccion.service';
export declare class SeccionController extends AbstractController {
    private readonly seccionService;
    constructor(seccionService: SeccionService);
    addSeccion(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllSeccioon(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getSeccionById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    listarSeccines(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateSeccion(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        finalizado: boolean;
        mensaje: string;
        datos: import("typeorm").UpdateResult;
    }>;
    deleteSeccion(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
