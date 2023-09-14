import { VeiculoDto } from "./veiculo.dto";
import {  IsNumber, IsNotEmpty } from "class-validator";

export class CarroDto extends VeiculoDto {
    @IsNumber()
    @IsNotEmpty()
    quantidadePortas = 2 |3 | 4;
    
}