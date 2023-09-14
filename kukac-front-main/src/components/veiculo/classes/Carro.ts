import { Veiculo } from '../interfaces/Veiculo';

export class Carro implements Veiculo {
  modelo: string;
  anoFabricacao: number;
  marca: string;
  quantidadePortas = 2 | 3 | 4;
  

  constructor(modelo: string, anoFabricacao: number,  marca: string, quantidadePortas: number) {
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.marca = marca;
    this.quantidadePortas = quantidadePortas;
    
  }
}