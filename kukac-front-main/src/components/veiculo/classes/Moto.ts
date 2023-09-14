import { Veiculo } from '../interfaces/Veiculo';

export class Moto implements Veiculo {
  modelo: string;
  anoFabricacao: number;
  rodas = 2;
  passageiros = 1 | 2;
  marca: string;

  constructor(modelo: string, anoFabricacao: number, rodas: number, passageiros: number, marca: string) {
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.rodas = rodas;
    this.passageiros = passageiros;
    this.marca = marca;
  }
}