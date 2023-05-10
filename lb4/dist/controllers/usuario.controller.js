"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async create(usuario) {
        return this.usuarioRepository.create(usuario);
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
UsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map