import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CepsService {
    private cepUrl = 'https://viacep.com.br/';
    async getCepsInfos(arrayCeps: string[]) {
        const arrayCepsInfo = [];
        for (const cep of arrayCeps) {
            try {
                const cepInfo = await axios.get(`${this.cepUrl}ws/${cep}/json/`);
                arrayCepsInfo.push(cepInfo.data);
            }catch(error){
                console.log(error)
            }
        }
        return arrayCepsInfo;
    }
}
