import { Module } from '@nestjs/common';
import { PalindromoController } from './palindromos/palindromo.controller';
import { NotasController } from './notas/nota.controller';
import { VeiculoController } from './veiculos/veiculos.controller';
import { VeiculosService } from './veiculos/veiculos.service';
import { CepsController } from './ceps/ceps.controller';
import { CepsService } from './ceps/ceps.service';

@Module({
  imports: [],
  controllers: [PalindromoController, NotasController, VeiculoController, CepsController],
  providers: [ VeiculosService, CepsService],
})
export class AppModule {}
