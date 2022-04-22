"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nestjs_pino_1 = require("nestjs-pino");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    const configService = app.get(config_1.ConfigService);
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const port = configService.get('PORT');
    await app.listen(port, () => {
        console.log(`API running on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map