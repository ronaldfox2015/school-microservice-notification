"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const log_model_1 = require("../../domain/model/log.model");
const logger_enum_1 = require("../../domain/enum/logger.enum");
class Logger {
    log(message, ...optionalParams) {
        optionalParams.forEach((params) => {
            if (logger_enum_1.TYPE.find((element) => element === params.method)) {
                const logSchema = new log_model_1.LogModel();
                const dataSchema = new log_model_1.DataModel();
                const contextSchema = new log_model_1.ContextModel();
                const modelHeaders = new log_model_1.Headers();
                contextSchema.messageHTTP = params.parameterType;
                contextSchema.url = decodeURIComponent(String(params.originalUrl.toString()));
                contextSchema.method = params.method;
                dataSchema.request = params.body;
                modelHeaders['x-forwarded-for'] = params.headers['x-forwarded-for'];
                modelHeaders['user-agent'] = params.headers['user-agent'];
                modelHeaders.srv = params.headers.srv;
                dataSchema.header = modelHeaders;
                contextSchema.data = dataSchema;
                logSchema.type = logger_enum_1.INFO;
                logSchema.resource = logger_enum_1.APP.toString();
                logSchema.resultCode = 200;
                logSchema.resultMessage = message;
                logSchema.context = contextSchema;
                logSchema.time = `${params.responseTime} ms`;
                console.log(JSON.stringify(logSchema));
            }
            else {
                console.log(JSON.stringify(message));
            }
        });
    }
    error(message, ...optionalParams) {
        optionalParams.forEach((params) => {
            let type = logger_enum_1.CRITICAL;
            if (params.code >= 400 && params.code < 500) {
                type = logger_enum_1.WARNING;
            }
            const logSchema = new log_model_1.LogModel();
            const contextSchema = new log_model_1.ContextModel();
            const dataSchema = new log_model_1.DataModel();
            const modelHeaders = new log_model_1.Headers();
            contextSchema.messageHTTP = params.parameterType;
            contextSchema.url = params.originalUrl.toString();
            contextSchema.method = params.method;
            dataSchema.response = params.dataResponse;
            dataSchema.request = params.body;
            modelHeaders['x-forwarded-for'] = params.headers['x-forwarded-for'];
            modelHeaders['user-agent'] = params.headers['user-agent'];
            modelHeaders.srv = params.headers.srv;
            dataSchema.header = modelHeaders;
            contextSchema.data = dataSchema;
            logSchema.type = type;
            logSchema.resultCode = params.code;
            logSchema.resultMessage = params.message;
            logSchema.context = contextSchema;
            logSchema.trace = params.trace;
            console.log(JSON.stringify(logSchema));
        });
    }
    warn(message, ...optionalParams) {
        console.log('-----------warn----------------');
        console.log(optionalParams);
        console.log('---------------------------');
    }
    debug(message, ...optionalParams) {
        console.log('----------debug-----------------');
        console.log(message);
        console.log(optionalParams);
        console.log('---------------------------');
    }
    verbose(message, ...optionalParams) {
        console.log('----------verbose-----------------');
        console.log(message);
        console.log(optionalParams);
        console.log('---------------------------');
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.service.js.map