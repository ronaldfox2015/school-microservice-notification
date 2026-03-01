"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const home_controller_1 = require("./rest/home.controller");
const errors_interceptor_1 = require("./interceptor/errors.interceptor");
const config_service_1 = require("../context/common/domain/helper/config.service");
const logger_service_1 = require("../context/common/application/service/logger.service");
const core_1 = require("@nestjs/core");
const mail_controller_1 = require("./rest/mail.controller");
const mail_module_1 = require("../context/mail/mail.module");
const RESOLVERS = [errors_interceptor_1.ErrorsInterceptor];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mail_module_1.MailModule],
        controllers: [home_controller_1.HomeController, mail_controller_1.MailController],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe
            },
            ...RESOLVERS,
            config_service_1.ConfigService,
            logger_service_1.Logger
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map