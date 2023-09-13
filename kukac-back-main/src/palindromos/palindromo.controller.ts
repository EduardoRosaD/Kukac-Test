import { Controller, Get, Param} from '@nestjs/common';

@Controller('palindromo')
export class PalindromoController {
    constructor() {}

    @Get()
    getPalindromo(@Param('start') start: number, @Param('end') end: number): number[] {
        const palindromos = [];
        for (let i = start; i <= end; i++) {
            if (this.isPalindromo(i)) {
                palindromos.push(i);
            }
        }
        return palindromos;   
    }

    isPalindromo(number: number): boolean {
        const numberString = number.toString();
        const numberStringReverse = numberString.split('').reverse().join('');
        return numberString === numberStringReverse;
    }
}
