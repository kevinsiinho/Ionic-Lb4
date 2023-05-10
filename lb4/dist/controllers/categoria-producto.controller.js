"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProductoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaProductoController = class CategoriaProductoController {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    /*  async find(
        @param.path.number('id') id: number,
        @param.query.object('filter') filter?: Filter<Producto>,
      ): Promise<Producto[]> {
        return this.categoriaRepository.productos(id).find(filter);
      }*/
    async findCategoriesWithProducts() {
        return this.categoriaRepository.find({
            include: [{ relation: 'productos' }],
        });
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/CategoriasConProductos', {
        responses: {
            '200': {
                description: 'Array of Categoria has many Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Producto) },
                    },
                },
            },
        },
    })
    /*  async find(
        @param.path.number('id') id: number,
        @param.query.object('filter') filter?: Filter<Producto>,
      ): Promise<Producto[]> {
        return this.categoriaRepository.productos(id).find(filter);
      }*/
    ,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProductoController.prototype, "findCategoriesWithProducts", null);
CategoriaProductoController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CategoriaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CategoriaRepository])
], CategoriaProductoController);
exports.CategoriaProductoController = CategoriaProductoController;
//# sourceMappingURL=categoria-producto.controller.js.map