import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FormularioCambiosRepository } from './repository/formulario-cambios.repository';
import { FormularioCambiosService } from './service/formulario.cambios.service';

@Module({
  controllers: [],
  providers: [FormularioCambiosService],
  imports: [TypeOrmModule.forFeature([FormularioCambiosRepository])],
})
export class FormularioModule {}
