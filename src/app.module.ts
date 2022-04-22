import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParametricaModule } from './parametrica/parametrica.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FormularioModule } from './formulario/formulario.module';
import { LoggerModule } from 'nestjs-pino';
import { LogService } from './log/log.service';
// import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: [LogService.getPinoHttpConfig(), LogService.getStream()],
    }),
    ParametricaModule,
    ConfigModule.forRoot(),
    // ScheduleModule.forRoot(),
    DatabaseModule,
    FormularioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
