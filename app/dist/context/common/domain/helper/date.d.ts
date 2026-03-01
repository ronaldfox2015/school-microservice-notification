export declare class DateTime {
    static convertToUTC(dateString: string): Date;
    static convertToZone(dateString: string): string;
    static transformOnlyDates(key: string, value?: unknown | string): string;
}
