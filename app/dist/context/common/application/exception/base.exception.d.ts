export declare class BaseException<T> {
    status: number;
    message: string;
    data: T;
    constructor(status: number, message: string, data: T);
}
export interface BaseExceptionResponse<T> {
    statusCode: any;
    error: any;
    status: number;
    message: string;
    data: T;
}
