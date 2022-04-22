import { CreateFormularioDto } from './create-formulario.dto';
declare const UpdateFormularioDto_base: import("@nestjs/common").Type<Partial<CreateFormularioDto>>;
export declare class UpdateFormularioDto extends UpdateFormularioDto_base {
    id: number;
    tabla: string;
    cambio: Record<string, unknown>;
    cambios: any;
}
export {};
