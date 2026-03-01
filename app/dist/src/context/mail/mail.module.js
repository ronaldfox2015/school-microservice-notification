"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../common/domain/helper/config.service");
const logger_service_1 = require("../common/application/service/logger.service");
const infrastructure_1 = require("./infrastructure");
const application_1 = require("./application");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            logger_service_1.Logger,
            config_service_1.ConfigService,
            ...infrastructure_1.Infrastructure,
            ...application_1.ApplicationServices
        ],
        exports: [
            logger_service_1.Logger,
            config_service_1.ConfigService,
            ...infrastructure_1.Infrastructure,
            ...application_1.ApplicationServices
        ]
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map