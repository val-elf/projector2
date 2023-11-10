import { IDbObject } from '~/services/api/models';

export interface ISession extends IDbObject {
    sessionToken: string;
    userId: string;
}