import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {FacturaDataSource} from '../datasources';
import {Categoria, CategoriaRelations, Producto} from '../models';
import {ProductoRepository} from './producto.repository';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {

  public readonly productos: HasManyRepositoryFactory<Producto, typeof Categoria.prototype.id>;

  constructor(
    @inject('datasources.factura') dataSource: FacturaDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(Categoria, dataSource);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
}
