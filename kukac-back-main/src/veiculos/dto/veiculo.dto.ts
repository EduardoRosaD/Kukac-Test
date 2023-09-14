import { IsString, IsNumber, IsNotEmpty, IsOptional } from "class-validator";
import { Veiculo } from "../entity/Veiculo";

export class VeiculoDto implements Veiculo {
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @IsNumber()
    @IsNotEmpty()
    anoFabricacao: number;

    @IsString()
    @IsNotEmpty()
    marca: string;

    quantidadePortas? = 1 | 2 | 3 | 4 
}