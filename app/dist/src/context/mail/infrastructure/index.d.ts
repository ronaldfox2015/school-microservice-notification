import { ConfigService } from '@common/domain/helper/config.service';
import { MailTrapMailRepository } from '@src/context/mail/infrastructure/repository/mailtrap-mail.repository';
import { MailRepository } from '@src/context/mail/domain/mail-repository';
export declare const mailRepository: {
    provide: typeof MailRepository;
    useFactory: (config: ConfigService) => Promise<MailTrapMailRepository>;
    inject: (typeof ConfigService)[];
};
export declare const Infrastructure: {
    provide: typeof MailRepository;
    useFactory: (config: ConfigService) => Promise<MailTrapMailRepository>;
    inject: (typeof ConfigService)[];
}[];
