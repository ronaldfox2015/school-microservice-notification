import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@common/domain/helper/config.service'
import { HttpExceptionFilter } from '@common/domain/helper/http-exception.filter'
import { LoggerInterceptor } from '@interceptor/logger.interceptor'
import { Logger } from '@common/application/service/logger.service'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  )

  app.useGlobalInterceptors(new LoggerInterceptor())
  app.useLogger(app.get(Logger))
  const config: any = app.get(ConfigService)
  const name: string = config.get('API_NAME')
  const version: string = config.get('API_VERSION')
  const titleDocs: string = config.get('API_DOCS_TITLE')
  const descriptionDocs: string = config.get('API_DOCS_DESCRIPTION')
  app.setGlobalPrefix(`v${version}/${name}`)
  app.useGlobalFilters(new HttpExceptionFilter())
  const options = new DocumentBuilder()
    .setTitle(titleDocs)
    .setDescription(descriptionDocs)
    .setVersion(`${version}.0`)
    .addTag(`v${version}/${name}`)
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup(`v${version}/${name}/doc`, app, document)
  await app.listen(80, '0.0.0.0')
}

void bootstrap()
