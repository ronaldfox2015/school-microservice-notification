import { Logger, Module } from '@nestjs/common'
import { ConfigService } from '@common/domain/helper/config.service'

@Module({
  imports: [],
  providers: [
    Logger,
    ConfigService
  ],
  exports: [
    Logger,
    ConfigService
  ]
})
export class CommonModule {}
