import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { MailOptionsInput } from '@src/app/input/mail-options.input';
import { ApiTags } from '@nestjs/swagger';
import { MailSendService } from '@src/context/mail/application/service/persist/mail.send.service';
import { MailOptionsDto } from '@src/context/mail/application/dto/mail-options.dto';

@ApiTags('Notification')
@Controller()
export class MailController {

  constructor (
    private readonly mailSendService: MailSendService
  ) {}

  @Post('mail')
  @HttpCode(200)
  async send (@Body() mailOptionsInput: MailOptionsInput): Promise<any> {
    await this.mailSendService.execute(mailOptionsInput as MailOptionsDto)
    return {
      message: 'Petición exitosa de notification.',
      data: [],
      code: 1000
    }
  }
}
