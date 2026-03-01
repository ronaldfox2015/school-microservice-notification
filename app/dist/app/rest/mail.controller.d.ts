import { MailOptionsInput } from '@src/app/input/mail-options.input';
import { MailSendService } from '@src/context/mail/application/service/persist/mail.send.service';
export declare class MailController {
    private readonly mailSendService;
    constructor(mailSendService: MailSendService);
    send(mailOptionsInput: MailOptionsInput): Promise<any>;
}
