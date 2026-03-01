"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_service_1 = require("./context/common/domain/helper/config.service");
const http_exception_filter_1 = require("./context/common/domain/helper/http-exception.filter");
const logger_interceptor_1 = require("./app/interceptor/logger.interceptor");
const logger_service_1 = require("./context/common/application/service/logger.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true
    }));
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.useLogger(app.get(logger_service_1.Logger));
    const config = app.get(config_service_1.ConfigService);
    const name = config.get('API_NAME');
    const version = config.get('API_VERSION');
    const titleDocs = config.get('API_DOCS_TITLE');
    const descriptionDocs = config.get('API_DOCS_DESCRIPTION');
    app.setGlobalPrefix(`v${version}/${name}`);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const options = new swagger_1.DocumentBuilder()
        .setTitle(titleDocs)
        .setDescription(descriptionDocs)
        .setVersion(`${version}.0`)
        .addTag(`v${version}/${name}`)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`v${version}/${name}/doc`, app, document);
    await app.listen(80, '0.0.0.0');
}
void bootstrap();
//# sourceMappingURL=main.js.map