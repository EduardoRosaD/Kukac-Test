import { Test, TestingModule } from '@nestjs/testing';
import { CepsService } from './ceps.service';
import axios from 'axios';

describe('CepsService', () => {
  let service: CepsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CepsService],
    }).compile();

    service = module.get<CepsService>(CepsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCepsInfos', () => {
    const mockCepInfo ={
      cep: "71680-370",
      logradouro: "Condomínio Quintas do Sol",
      complemento: "",
      bairro: "Setor Habitacional Jardim Botânico",
      localidade: "Brasília",
      uf: "DF",
      ibge: "5300108",
      gia: "",
      ddd: "61",
      siafi: "9701"
    }
    const testCeps = ['71680370','71680370','71680370'];

    it('should return an array of ceps info', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({data: mockCepInfo});
      const cepsInfo = await service.getCepsInfos(testCeps);
      expect(cepsInfo).toEqual([mockCepInfo,mockCepInfo,mockCepInfo]);
    });

});
}
);
