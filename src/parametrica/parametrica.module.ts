import { Module } from '@nestjs/common';
import { ParametricaService } from './service/parametrica.service';
import { ParametricaController } from './controller/parametrica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './repositories/categoria.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriaTramiteRepository } from './repositories/catalogo.tramite.repository';
import { GrupoRepository } from './repositories/grupo.repository';
import { SeccionRepository } from './repositories/seccion.repository';
import { CampoRepository } from './repositories/campos.repository';
import { ArancelRepository } from './repositories/aranceles.repository';
import { ParPublicacionRepository } from './repositories/par.publicacion.repository';
import { DocumentoEmitidoRepository } from './repositories/documento.eminitido.repository';
import { ArancelesService } from './service/aranceles.service';
import { CamposService } from './service/campos.service';
import { CatalogoTramiteService } from './service/catalogo.tramite.service';
import { DocumentoEmitdoService } from './service/documento.emitido.service';
import { GrupoService } from './service/grupo.service';
import { ParPublicacionService } from './service/par.publicacion.service';
import { SeccionService } from './service/seccion.service';
import { CatalogoTramiteController } from './controller/catalogo.tramite.controller';
import { ArancelesController } from './controller/aranceles.controller';
import { CampoController } from './controller/campos.controller';
import { DocumentoEmitidoController } from './controller/documento.emitido.controller';
import { GrupoController } from './controller/grupo.controller';
import { ParPublicacionController } from './controller/par.publicacion.controller';
import { SeccionController } from './controller/seccion.controller';
import { LoginService } from './service/authentication.service';
import { LogInController } from './controller/login.controller';
import { HttpModule } from '@nestjs/axios';
import { FormularioCambiosRepository } from 'src/formulario/repository/formulario-cambios.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoriaRepository,
      CategoriaTramiteRepository,
      GrupoRepository,
      SeccionRepository,
      CampoRepository,
      ArancelRepository,
      ParPublicacionRepository,
      DocumentoEmitidoRepository,
      FormularioCambiosRepository,
    ]),
    HttpModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
      }),
    }),
  ],
  controllers: [
    ParametricaController,
    CatalogoTramiteController,
    ArancelesController,
    CampoController,
    DocumentoEmitidoController,
    GrupoController,
    ParPublicacionController,
    SeccionController,
    LogInController,
  ],
  providers: [
    ConfigService,
    ParametricaService,
    ArancelesService,
    CamposService,
    CatalogoTramiteService,
    DocumentoEmitdoService,
    GrupoService,
    ParPublicacionService,
    SeccionService,
    LoginService,
    JwtStrategy,
  ],
})
export class ParametricaModule {}
