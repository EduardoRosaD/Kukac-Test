import { Body, Controller, Post } from '@nestjs/common';

import { CepsService } from './ceps.service';

@Controller('ceps')
export class CepsController {
        constructor( private readonly CepsService: CepsService) { }
    @Post()
    async getCeps(@Body() ceps: {ceps:string[]}) {
       try {
        return await  this.CepsService.getCepsInfos(ceps.ceps);
       } catch (error) {
              console.log(error.message)
       }
    }
}
