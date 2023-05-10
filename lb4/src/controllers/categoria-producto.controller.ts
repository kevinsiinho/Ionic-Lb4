import {authenticate} from '@loopback/authentication';
import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef
} from '@loopback/rest';
import {
  Categoria,
  Producto,
} from '../models';
import {CategoriaRepository} from '../repositories';
@authenticate('jwt') 
export class CategoriaProductoController {
  constructor(
    @repository(CategoriaRepository) protected categoriaRepository: CategoriaRepository,
  ) { }

  @get('/CategoriasConProductos', {
    responses: {
      '200': {
        description: 'Array of Categoria has many Producto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
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
async findCategoriesWithProducts(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      include: [{relation: 'productos'}],
    });
  }
}
