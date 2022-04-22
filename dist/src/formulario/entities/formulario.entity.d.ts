import { Status } from '../../common/constants';
import { AbstractEntityEmpresa } from '../../common/dto/abstract-entity-empresa.dto';
export declare class Formulario extends AbstractEntityEmpresa {
    id: number;
    tabla: string;
    cambio: Record<string, unknown>;
    estado: Status;
    usuarioBase: string;
    usuarioAplicacion: string;
}
