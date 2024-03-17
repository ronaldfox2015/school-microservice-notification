import { Module } from '@nestjs/common'
import { ConfigService } from '@common/domain/helper/config.service'
import { Logger } from '@common/application/service/logger.service'
import { Infrastructure } from '@src/context/mail/infrastructure';
import { ApplicationServices } from '@src/context/mail/application';

@Module({
  imports: [],
  providers: [
    Logger,
    ConfigService,
    ...Infrastructure,
    ...ApplicationServices
  ],
  exports: [
    Logger,
    ConfigService,
    ...Infrastructure,
    ...ApplicationServices
  ]
})
export class MailModule {}
