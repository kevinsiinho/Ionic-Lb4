import { Entity } from '@loopback/repository';
export declare class Factura extends Entity {
    id?: string;
    idVendedor: string;
    fecha: string;
    iva: number;
    descuento: number;
    subtotal: number;
    total: number;
    productos: object[];
    [prop: string]: any;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export type FacturaWithRelations = Factura & FacturaRelations;
