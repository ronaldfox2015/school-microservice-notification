import { type MailRepository } from '@src/context/mail/domain/mail-repository';
import { type MailModel } from '@src/context/mail/domain/mail.model';
import { ConfigService } from '@common/domain/helper/config.service';
export declare class MailTrapMailRepository implements MailRepository {
    private readonly config;
    private readonly transporter;
    constructor(config: ConfigService);
    send(mailOptions: MailModel): Promise<void>;
}
