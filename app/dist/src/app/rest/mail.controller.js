"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const mail_options_input_1 = require("../input/mail-options.input");
const swagger_1 = require("@nestjs/swagger");
const mail_send_service_1 = require("../../context/mail/application/service/persist/mail.send.service");
let MailController = class MailController {
    constructor(mailSendService) {
        this.mailSendService = mailSendService;
    }
    async send(mailOptionsInput) {
        await this.mailSendService.execute(mailOptionsInput);
        return {
            message: 'Petición exitosa de notification.',
            data: [],
            code: 1000
        };
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Post)('mail'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mail_options_input_1.MailOptionsInput]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "send", null);
exports.MailController = MailController = __decorate([
    (0, swagger_1.ApiTags)('Notification'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [mail_send_service_1.MailSendService])
], MailController);
//# sourceMappingURL=mail.controller.js.map