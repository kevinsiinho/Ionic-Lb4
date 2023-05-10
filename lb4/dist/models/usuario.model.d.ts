import { Entity } from '@loopback/repository';
export declare class Usuario extends Entity {
    id: number;
    name: string;
    email: string;
    password: string;
    rol: number;
    [prop: string]: any;
    constructor(data?: Partial<Usuario>);
}
export interface UserRelations {
}
export type UserWithRelations = Usuario & UserRelations;
