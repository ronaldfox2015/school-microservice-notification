"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor() {
        this.logger = new common_2.Logger();
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const baseInputException = exception.response;
        const message = baseInputException === undefined ? exception.message : baseInputException.error;
        const data = (baseInputException === undefined ? exception.data : baseInputException.message) ?? [];
        const code = (baseInputException === undefined ? exception.status : baseInputException.statusCode) ??
            common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = {
            code,
            message,
            data
        };
        const { originalUrl, method, headers, ip, body } = ctx.getRequest();
        const ips = headers['x-forwarded-for'] || ip;
        const clientIp = ips.includes(',') ? ips.split(',', 1)[0] : ips;
        const dataResponse = exceptionResponse;
        const responseData = {
            originalUrl,
            method,
            headers,
            clientIp,
            body,
            dataResponse,
            code
        };
        this.logger.error(exceptionResponse.message, responseData);
        response.status(code).json(exceptionResponse);
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map