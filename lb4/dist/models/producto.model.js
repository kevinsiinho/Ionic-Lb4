"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const categoria_model_1 = require("./categoria.model");
let Producto = class Producto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Producto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Producto.prototype, "detalle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Producto.prototype, "cantidad", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => categoria_model_1.Categoria),
    tslib_1.__metadata("design:type", Number)
], Producto.prototype, "categoriaId", void 0);
Producto = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.model.js.map