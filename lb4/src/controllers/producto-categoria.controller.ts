import {authenticate} from '@loopback/authentication';
import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Producto,
  Categoria,
} from '../models';
import {ProductoRepository} from '../repositories';
@authenticate('jwt') 
export class ProductoCategoriaController {
  constructor(
    @repository(ProductoRepository)
    public productoRepository: ProductoRepository,
  ) { }

  @get('/productos/{id}/categoria', {
    responses: {
      '200': {
        description: 'Categoria belonging to Producto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categoria)},
          },
        },
      },
    },
  })
  async getCategoria(
    @param.path.number('id') id: typeof Producto.prototype.id,
  ): Promise<Categoria> {
    return this.productoRepository.categoria(id);
  }
}
