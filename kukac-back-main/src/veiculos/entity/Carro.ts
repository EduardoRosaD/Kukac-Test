import { Veiculo } from "./Veiculo";

export class Carro implements Veiculo {
    constructor(
        public modelo: string,
        public anoFabricacao: number,
        public marca: string,
        private _quantidadePortas: number
    ) {
        if (_quantidadePortas < 2 || _quantidadePortas > 4) {
            throw new Error('A quantidade de portas deve estar entre 2 e 4.');
        }
    }

    get quantidadePortas(): number {
        return this._quantidadePortas;
    }
}