import { MailRepository } from '@src/context/mail/domain/mail-repository';
import { type MailOptionsDto } from '@src/context/mail/application/dto/mail-options.dto';
export declare class MailSendService {
    private readonly mailRepository;
    constructor(mailRepository: MailRepository);
    execute(input: MailOptionsDto): Promise<void>;
}
