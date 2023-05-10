import { Seminario2Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Seminario2Application;
    client: Client;
}
