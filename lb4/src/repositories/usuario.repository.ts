import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaDataSource} from '../datasources';
import {Usuario} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id
> {
  constructor(
    @inject('datasources.factura') dataSource: FacturaDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
