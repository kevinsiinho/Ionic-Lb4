import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: number;
    nombre: string;
    detalle: string;
    precio: number;
    cantidad: number;
    categoriaId: number;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export type ProductoWithRelations = Producto & ProductoRelations;
