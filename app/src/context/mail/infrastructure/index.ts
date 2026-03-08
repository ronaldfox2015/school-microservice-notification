import { ConfigService } from '@common/domain/helper/config.service'
import { MailTrapMailRepository } from '@src/context/mail/infrastructure/repository/mailtrap-mail.repository'
import { MailRepository } from '@src/context/mail/domain/mail-repository'
import { YoutubeRepository } from '@src/context/mail/domain/youtube/youtube.repository'
import { GoogleYoutubeRepository } from '@src/context/mail/infrastructure/repository/youtube/google-youtube.repository'

export const mailRepository = {
  provide: MailRepository,
  useFactory: async (config: ConfigService) => {
    return new MailTrapMailRepository(config)
  },
  inject: [ConfigService]
}

export const youtubeRepository = {
  provide: YoutubeRepository,
  useFactory: (config: ConfigService) => {
    return new GoogleYoutubeRepository(config)
  },
  inject: [ConfigService]
}

export const Infrastructure = [
  mailRepository,
  youtubeRepository
]
