"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Rol = class Rol extends repository_1.Entity {
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
], Rol.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Rol.prototype, "nombre", void 0);
Rol = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Rol);
exports.Rol = Rol;
//# sourceMappingURL=rol.model.js.map