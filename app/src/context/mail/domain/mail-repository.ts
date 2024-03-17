import { MailModel } from '@src/context/mail/domain/mail.model';

export abstract class MailRepository {
  abstract send (mailOptions: MailModel): Promise<void>
}