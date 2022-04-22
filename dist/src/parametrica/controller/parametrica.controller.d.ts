import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { ParametricaService } from '../service/parametrica.service';
export declare class ParametricaController extends AbstractController {
    private readonly parametricaService;
    constructor(parametricaService: ParametricaService);
    addCategoria(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getAllCategoria(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    updateCategoria(body: any, req: any): Promise<{
        finalizado: boolean;
        mensaje: string;
        datos: {};
    } | {
        mensaje: string;
        datos: import("typeorm").UpdateResult;
        finalizado: boolean;
    }>;
    deleteCategoriaById(body: any, req: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getCatalogo(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    getCategoriaById(body: any): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
    generar(): Promise<import("../../common/dto/success-response.dto").SuccessResponseDto>;
}
