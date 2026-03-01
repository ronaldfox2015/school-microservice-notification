import { type MailModel } from '@src/context/mail/domain/mail.model';
export declare abstract class MailRepository {
    abstract send(mailOptions: MailModel): Promise<void>;
}
