import { Injectable } from '@nestjs/common';
import { MailRepository } from '@src/context/mail/domain/mail-repository';
import { MailModel } from '@src/context/mail/domain/mail.model';
import { MailOptionsDto } from '@src/context/mail/application/dto/mail-options.dto';

@Injectable()
export class MailSendService {
  constructor (
    private readonly mailRepository: MailRepository
  ) {}

  public async execute (input: MailOptionsDto) :Promise<void>{
    const mailModel = new MailModel()
    mailModel.from = 'ronaldfox2015@gmail.com'
    mailModel.to = input.to
    mailModel.subject = input.subject
    mailModel.text = 'hola jorge ya funcina el correo'
    await this.mailRepository.send(mailModel).then()
  }
}
