import { Categoria } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaProductoController {
    protected categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    findCategoriesWithProducts(): Promise<Categoria[]>;
}
