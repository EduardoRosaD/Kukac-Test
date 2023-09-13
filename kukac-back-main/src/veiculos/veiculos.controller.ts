import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CarroDto } from './dto/carro.dto';
import { MotoDto } from './dto/moto.dto';
import { VeiculoDto } from './dto/veiculo.dto';

@Controller('veiculos')
export class VeiculoController {
    constructor(private readonly veiculoService: VeiculosService) { }

    @Post('moto')
    async saveMoto(@Body() moto: MotoDto) {
        return  this.veiculoService.saveMoto(moto);
    }
    @Post('carro')
    async saveVeiculo(@Body() veiculo: CarroDto) {
        return  this.veiculoService.saveCarro(veiculo);

    }

}
