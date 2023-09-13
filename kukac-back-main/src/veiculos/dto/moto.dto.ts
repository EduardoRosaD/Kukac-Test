import { VeiculoDto } from "./veiculo.dto";
import { IsNumber, IsNotEmpty, Min, Max } from "class-validator";

export class MotoDto extends VeiculoDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    @Max(2)
    rodas: number = 2;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(2)
    passageiros: number;
}

