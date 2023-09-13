import { Body, Controller, Post } from '@nestjs/common';

import { CepsService } from './ceps.service';

@Controller('ceps')
export class CepsController {
        constructor( private readonly CepsService: CepsService) { }
    @Post()
   
    async getCeps(@Body() bceps: string[]) {
       const ceps = bceps['ceps'];
        return await  this.CepsService.getCepsInfos(ceps);
    }
}
