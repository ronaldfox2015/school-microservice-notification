"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException {
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=base.exception.js.map