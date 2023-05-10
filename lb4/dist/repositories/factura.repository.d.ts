import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Factura, FacturaRelations } from '../models';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype.id, FacturaRelations> {
    constructor(dataSource: MongoDataSource);
}
