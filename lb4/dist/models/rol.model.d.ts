import { Entity } from '@loopback/repository';
export declare class Rol extends Entity {
    id?: number;
    nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<Rol>);
}
export interface RolRelations {
}
export type RolWithRelations = Rol & RolRelations;
