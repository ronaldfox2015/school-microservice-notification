"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const date_fns_1 = require("date-fns");
class DateTime {
    static convertToUTC(dateString) {
        const date = new Date(dateString);
        date.setTime(date.getTime() + 5 * 3600000);
        return date;
    }
    static convertToZone(dateString) {
        const date = new Date(dateString);
        date.setTime(date.getTime() + -5 * 3600000);
        return (0, date_fns_1.format)(date, 'yyyy-MM-dd HH:mm:ss');
    }
    static transformOnlyDates(key, value) {
        if (['publicationAt', 'publicationEndAt'].includes(key)) {
            return (0, date_fns_1.format)(DateTime.convertToUTC(String(value)), "yyyy-MM-dd'T'HH:mm:ss'Z'");
        }
        return String(value);
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=date.js.map