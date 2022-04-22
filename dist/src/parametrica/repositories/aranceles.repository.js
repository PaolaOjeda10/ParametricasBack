"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArancelRepository = void 0;
const constants_1 = require("../../common/constants");
const typeorm_1 = require("typeorm");
const arancel_entity_1 = require("../entities/arancel.entity");
let ArancelRepository = class ArancelRepository extends typeorm_1.Repository {
    async createArancel(arancelDto) {
        const resp = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .insert()
            .into(arancel_entity_1.Arancel)
            .values(Object.assign(Object.assign({}, arancelDto), { usuarioActualizacion: '1', usuarioCreacion: '1' }))
            .execute();
        return resp;
    }
    async updateArancel(id, arancelDto) {
        return await this.update(id, Object.assign(Object.assign({}, arancelDto), { usuarioActualizacion: '1' }));
    }
    async getAllArancel() {
        return await this.find({
            order: {
                id: 'ASC',
            },
        });
    }
    async getArancelById(id) {
        return await this.findOne(id);
    }
    async buscarArancel(cod, id) {
        return await this.findOne({
            where: {
                idCatalogoTramite: id,
                codTipoSocietario: cod,
            },
        });
    }
    async listarArancel(idCatalogoTramite) {
        return await this.find({
            where: {
                idCatalogoTramite: idCatalogoTramite,
            },
            order: {
                id: 'ASC',
            },
        });
    }
    async removeArancel(id) {
        return await this.update(id, { estado: constants_1.Status.INACTIVE });
    }
};
ArancelRepository = __decorate([
    (0, typeorm_1.EntityRepository)(arancel_entity_1.Arancel)
], ArancelRepository);
exports.ArancelRepository = ArancelRepository;
//# sourceMappingURL=aranceles.repository.js.map