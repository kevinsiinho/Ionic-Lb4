import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { FacturaDataSource } from '../datasources';
import { Producto, ProductoRelations, Categoria } from '../models';
import { CategoriaRepository } from './categoria.repository';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    protected categoriaRepositoryGetter: Getter<CategoriaRepository>;
    readonly categoria: BelongsToAccessor<Categoria, typeof Producto.prototype.id>;
    constructor(dataSource: FacturaDataSource, categoriaRepositoryGetter: Getter<CategoriaRepository>);
}
