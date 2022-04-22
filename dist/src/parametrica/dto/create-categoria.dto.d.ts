import { Status, TramiteParametricaTipoCatalogo } from 'src/common/constants';
export declare class CategoriaDto {
    id: number;
    codigo: string;
    nombre: string;
    estado: Status;
    tipoCatalogo: TramiteParametricaTipoCatalogo;
    orden: number;
}
