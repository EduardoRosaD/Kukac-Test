import { Controller, Get, Query } from '@nestjs/common';

@Controller('notas')
export class NotasController {
    constructor() { }

    @Get()
    getNotas(@Query("valorPago") valorPago: number, @Query("valorCompra") valorCompra: number): number {
        let troco = valorPago - valorCompra;
        let notasMinimas = 0;
        let count = 0


        while (notasMinimas < troco) {
              count++
            if (notasMinimas + 100 <= troco) notasMinimas += 100

            else if (notasMinimas + 10 <= troco) notasMinimas += 10;

            else if (notasMinimas + 1 <= troco) notasMinimas += 1;
          
        }
        return count

    }
  
}
