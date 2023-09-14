import { HttpStatus, Injectable } from '@nestjs/common';
import { CarroDto } from './dto/carro.dto';
import { MotoDto } from './dto/moto.dto';
import { VeiculoDto } from './dto/veiculo.dto';

@Injectable()
export class VeiculosService {

    constructor() { }

    saveCarro(carro: CarroDto) {
       return this.saveVeiculo(carro);
    }
    saveMoto(moto: MotoDto) {
       return this.saveVeiculo(moto);
    }

    saveVeiculo(veiculo: CarroDto | MotoDto) {
        const fs = require('fs');
        const caminho = "../kukac-back-main/src/veiculos/veiculos.json";
        let arrayVazio = [];
        const conteudo = fs.readFileSync(caminho, 'utf8');
        try {
            if (conteudo) {
                const array = JSON.parse(conteudo);
                array.push(veiculo);
                arrayVazio = [...array]
            } else {
                arrayVazio.push(veiculo);
            }
            fs.writeFileSync(caminho, JSON.stringify(arrayVazio));
            return "criado com sucesso"
        } catch (error) {
            console.log(error);
        }

    }

}
