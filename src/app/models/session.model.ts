import { IBaseServerItem } from './base-server.model';
import { IUser } from './user.model';

export interface ISession extends IBaseServerItem {
    sessionToken: string;
    userId: string;
}