export declare class ConfigService {
    private readonly envConfig;
    constructor();
    get(key: string): string;
    getFilter(keys: string[]): Record<string, any>;
    getDebug(key: string): [string | undefined, string | undefined];
}
