import { Controller, Get, Param, Query} from '@nestjs/common';

@Controller('palindromos')
export class PalindromoController {
    constructor() {}

    @Get()
    getPalindromo(@Query('start') start: string, @Query('end') end: string): number[] {
        const palindromos = [];
        const starter = parseInt(start);
        const ender = parseInt(end);
        for (let i = starter; i <= ender; i++) {
            console.log("Palindromo: ", i)
            if (this.isPalindromo(i)) {
                
                palindromos.push(i);
            }
        }
        return palindromos;   
    }

    isPalindromo(stringNumber: string | number): boolean {
        const number = stringNumber.toString();
        const reverseNumber = number.split('').reverse().join('');
        return number === reverseNumber;
    }
}
