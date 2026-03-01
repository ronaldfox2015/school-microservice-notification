export declare class LogModel {
    resource: string;
    type: string;
    resultCode: number;
    resultMessage: string;
    context: ContextModel;
    message: string;
    trace: any;
    time: string;
}
export declare class ContextModel {
    ipHost: string;
    messageHTTP: string;
    url: string;
    method: string;
    data: DataModel;
}
export declare class DataModel {
    response: any | undefined;
    request: any | undefined;
    header: Headers | undefined;
    validator: any | undefined;
}
export declare class Headers {
    'x-forwarded-for': string | undefined;
    'user-agent': string | undefined;
    srv: any | undefined;
}
