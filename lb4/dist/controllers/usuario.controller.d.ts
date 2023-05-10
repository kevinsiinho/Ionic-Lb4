import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: number, usuario: Usuario): Promise<void>;
    replaceById(id: number, usuario: Usuario): Promise<void>;
    deleteById(id: number): Promise<void>;
}
