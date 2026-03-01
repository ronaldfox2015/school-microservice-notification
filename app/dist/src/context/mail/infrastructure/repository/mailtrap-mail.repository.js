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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTrapMailRepository = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../common/domain/helper/config.service");
const nodemailer_1 = __importDefault(require("nodemailer"));
let MailTrapMailRepository = class MailTrapMailRepository {
    constructor(config) {
        this.config = config;
        this.transporter = nodemailer_1.default.createTransport({
            host: config.get('HOST_MAIL'),
            port: Number(config.get('HOST_MAIL_PORT')),
            secure: false,
            auth: {
                user: config.get('HOST_MAIL_USER'),
                pass: config.get('HOST_MAIL_PASSWORD'),
                type: 'LOGIN'
            }
        });
    }
    async send(mailOptions) {
        try {
            await this.transporter.sendMail(Object.assign(mailOptions), (error, info) => {
                console.log(info);
                if (error) {
                    console.log('Error al enviar el correo:', error);
                }
                else {
                    console.log('Correo electrónico enviado:', info.response);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.MailTrapMailRepository = MailTrapMailRepository;
exports.MailTrapMailRepository = MailTrapMailRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], MailTrapMailRepository);
//# sourceMappingURL=mailtrap-mail.repository.js.map