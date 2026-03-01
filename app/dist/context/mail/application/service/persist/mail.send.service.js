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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSendService = void 0;
const common_1 = require("@nestjs/common");
const mail_repository_1 = require("../../../domain/mail-repository");
const mail_model_1 = require("../../../domain/mail.model");
let MailSendService = class MailSendService {
    constructor(mailRepository) {
        this.mailRepository = mailRepository;
    }
    async execute(input) {
        const mailModel = new mail_model_1.MailModel();
        mailModel.from = 'ronaldfox2015@gmail.com';
        mailModel.to = input.to;
        mailModel.subject = input.subject;
        mailModel.text = 'hola jorge ya funcina el correo';
        await this.mailRepository.send(mailModel).then();
    }
};
exports.MailSendService = MailSendService;
exports.MailSendService = MailSendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mail_repository_1.MailRepository])
], MailSendService);
//# sourceMappingURL=mail.send.service.js.map