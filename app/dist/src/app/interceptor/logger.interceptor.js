"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const logger_enum_1 = require("../../context/common/domain/enum/logger.enum");
let LoggerInterceptor = class LoggerInterceptor {
    constructor() {
        this.logger = new common_1.Logger();
    }
    intercept(context, next) {
        let request = context.switchToHttp().getRequest();
        let response = context.switchToHttp().getResponse();
        const { originalUrl, method, params, query, body, headers } = request;
        delete params['0'];
        const startTime = Date.now();
        request = { params, query, body };
        return next.handle().pipe((0, rxjs_1.tap)((data) => {
            if (!String(originalUrl).includes('health')) {
                const parameterType = 'response';
                response = data;
                const endTime = Date.now();
                const responseTime = endTime - startTime;
                this.logger.log(logger_enum_1.INFO, {
                    originalUrl,
                    method,
                    params,
                    query,
                    body,
                    headers,
                    parameterType,
                    request,
                    response,
                    responseTime
                });
            }
        }));
    }
};
exports.LoggerInterceptor = LoggerInterceptor;
exports.LoggerInterceptor = LoggerInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggerInterceptor);
//# sourceMappingURL=logger.interceptor.js.map