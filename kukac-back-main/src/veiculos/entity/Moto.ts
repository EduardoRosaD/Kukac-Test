import { Veiculo } from "./Veiculo";

export class Moto implements Veiculo {
    constructor(
        public modelo: string,
        public anoFabricacao: number,
        public marca: string,
        private _rodas: number,
        private _passageiros: number
    ) {
        if (_rodas !== 2) {
            throw new Error('As motos devem ter 2 rodas.');
        }

        if (_passageiros < 1 || _passageiros > 2) {
            throw new Error('Uma moto pode transportar entre 1 e 2 passageiros.');
        }
    }

    get rodas(): number {
        return this._rodas;
    }

    get passageiros(): number {
        return this._passageiros;
    }
}