"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infrastructure = exports.mailRepository = void 0;
const config_service_1 = require("../../common/domain/helper/config.service");
const mailtrap_mail_repository_1 = require("./repository/mailtrap-mail.repository");
const mail_repository_1 = require("../domain/mail-repository");
exports.mailRepository = {
    provide: mail_repository_1.MailRepository,
    useFactory: async (config) => {
        return new mailtrap_mail_repository_1.MailTrapMailRepository(config);
    },
    inject: [config_service_1.ConfigService]
};
exports.Infrastructure = [
    exports.mailRepository
];
//# sourceMappingURL=index.js.map