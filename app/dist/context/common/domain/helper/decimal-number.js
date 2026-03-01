"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalNumber = void 0;
class DecimalNumber {
    static format(number, decimals = 0, decimalSeparator = '.', thousandsSeparator = ',') {
        let num = number.toFixed(decimals).toString();
        const regex = /(\d)(?=(\d{3})+(?!\d))/g;
        num = num.replace(regex, `$1${thousandsSeparator}`);
        return num.replace('.', decimalSeparator);
    }
}
exports.DecimalNumber = DecimalNumber;
//# sourceMappingURL=decimal-number.js.map