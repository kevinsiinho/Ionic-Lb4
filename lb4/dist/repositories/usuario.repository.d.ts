import { DefaultCrudRepository } from '@loopback/repository';
import { FacturaDataSource } from '../datasources';
import { Usuario } from '../models';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id> {
    constructor(dataSource: FacturaDataSource);
}
