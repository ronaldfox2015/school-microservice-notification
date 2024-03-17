import { Module, ValidationPipe } from '@nestjs/common'
import { HomeController } from '@rest/home.controller'
import { ErrorsInterceptor } from '@interceptor/errors.interceptor'
import { ConfigService } from '@common/domain/helper/config.service'
import { Logger } from '@common/application/service/logger.service'
import { APP_PIPE } from '@nestjs/core'
import { MailController } from '@rest/mail.controller';
import { MailModule } from '@src/context/mail/mail.module';
const RESOLVERS = [ErrorsInterceptor]

@Module({
  imports: [MailModule],
  controllers: [HomeController, MailController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    ...RESOLVERS,
    ConfigService,
    Logger
  ]
})
export class AppModule {}
