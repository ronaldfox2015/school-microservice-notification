import { MailRepository } from '@src/context/mail/domain/mail-repository';
import { MailModel } from '@src/context/mail/domain/mail.model';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@common/domain/helper/config.service';
import nodemailer from 'nodemailer';

@Injectable()
export class MailTrapMailRepository implements MailRepository {
  private transporter: any
  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: config.get('HOST_MAIL'),
      port: Number(config.get('HOST_MAIL_PORT')),
      secure: false, // true para TLS; false para otros protocolos
      auth: {
        user: config.get('HOST_MAIL_USER'),
        pass: config.get('HOST_MAIL_PASSWORD'),
        type: 'LOGIN'
      }
    });
  }

  async send (mailOptions: MailModel): Promise<void> {
    try {
      await this.transporter.sendMail(Object.assign(mailOptions), (error, info) => {
        console.log(info)
        if (error) {
          console.log('Error al enviar el correo:', error);
        } else {
          console.log('Correo electrónico enviado:', info.response);
        }
      })
    } catch (e) {
      console.log(e)
    }

  }
}