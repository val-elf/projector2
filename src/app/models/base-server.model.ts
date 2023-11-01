export interface IDateOperation {
    _dt: string;
    _user: string;
}

export interface IBaseServerItem {
    _id: string;
    _coretype?: string;
    _hash?: string;
    _create?: IDateOperation;
    _update?: IDateOperation;
}