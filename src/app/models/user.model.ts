import { IBaseServerItem } from './base-server.model';

export interface IUser extends IBaseServerItem {
    login: string;
    password: string;
    roles: string[];
}