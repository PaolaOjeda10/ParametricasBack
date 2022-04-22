"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametricaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const formulario_cambios_repository_1 = require("../../formulario/repository/formulario-cambios.repository");
const catalogo_tramite_repository_1 = require("../repositories/catalogo.tramite.repository");
const categoria_repository_1 = require("../repositories/categoria.repository");
let ParametricaService = class ParametricaService {
    constructor(categoriaRepository, catTramiteRepository, cambioRepository) {
        this.categoriaRepository = categoriaRepository;
        this.catTramiteRepository = catTramiteRepository;
        this.cambioRepository = cambioRepository;
    }
    async createCategoria(categoria, { formulario, usuarioAuditoria }) {
        const existe = await this.categoriaRepository.getCategoriaById(categoria.id);
        if (existe) {
            throw new common_1.PreconditionFailedException(`ID #${categoria.id} ya Registrado`);
        }
        const resp = await this.categoriaRepository.createCategoria(categoria);
        if (resp) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return resp;
    }
    async getAllCategoria() {
        return await this.categoriaRepository.getAllCategoria();
    }
    async getCategoriaById(id) {
        const categoria = await this.categoriaRepository.getCategoriaById(id);
        if (!categoria) {
            throw new common_1.NotFoundException(`Categoria con #${id} no encontrado`);
        }
        return categoria;
    }
    async updateCategoria(id, categoria, { formulario, usuarioAuditoria }) {
        const c = Object.keys(formulario.cambio);
        if (c.length === 1) {
            return {
                finalizado: true,
                mensaje: 'Sin Cambios',
                datos: {},
            };
        }
        if (categoria.id && id !== categoria.id) {
            const existe = await this.categoriaRepository.getCategoriaById(categoria.id);
            if (existe) {
                throw new common_1.PreconditionFailedException(`ID #${categoria.id} ya Registrado`);
            }
        }
        const cat = await this.categoriaRepository.getCategoriaById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Categoria con #${id} no encontrado`);
        }
        const resp = await this.categoriaRepository.updateCategoria(id, categoria);
        if (resp) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return { mensaje: 'Registro Actualizado', datos: resp, finalizado: true };
    }
    async deleteCategoria(id, formulario, usuarioAuditoria) {
        const cat = await this.categoriaRepository.getCategoriaById(id);
        if (!cat) {
            throw new common_1.NotFoundException(`Categoria con #${id} no encontrado`);
        }
        const resp = await this.categoriaRepository.removeCategoria(id);
        if (resp) {
            await this.cambioRepository.createRegistroCambios(formulario, usuarioAuditoria);
        }
        return resp;
    }
    async generarCsv() {
        try {
            await this.catTramiteRepository.generar('categorias');
            await this.catTramiteRepository.generar('catalogo_tramites');
            await this.catTramiteRepository.generar('aranceles');
            await this.catTramiteRepository.generar('documentos_emitidos');
            await this.catTramiteRepository.generar('par_publicaciones');
            await this.catTramiteRepository.generar('grupos');
            await this.catTramiteRepository.generar('campos');
            await this.catTramiteRepository.generar('secciones');
            return 'CSV Generados satisfactoriamente';
        }
        catch (error) {
            return error;
        }
    }
};
ParametricaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_repository_1.CategoriaRepository)),
    __metadata("design:paramtypes", [categoria_repository_1.CategoriaRepository,
        catalogo_tramite_repository_1.CategoriaTramiteRepository,
        formulario_cambios_repository_1.FormularioCambiosRepository])
], ParametricaService);
exports.ParametricaService = ParametricaService;
//# sourceMappingURL=parametrica.service.js.map