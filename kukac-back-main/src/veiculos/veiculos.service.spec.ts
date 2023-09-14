import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosService } from './veiculos.service';
import { CarroDto } from './dto/carro.dto';
import { MotoDto } from './dto/moto.dto';

describe('VeiculosService', () => {
  let service: VeiculosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeiculosService],
    }).compile();

    service = module.get<VeiculosService>(VeiculosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('saveCarro', () => {
    it('should save a Carro and return HttpStatus.CREATED', () => {
      const carro: CarroDto = {
        modelo: 'Modelo Carro',
        anoFabricacao: 2022,
        marca: 'Marca Carro',
        quantidadePortas: 4,
      };

      const result = service.saveCarro(carro);

      expect(result).toBe("criado com sucesso");
    });
  });

  describe('saveMoto', () => {
    it('should save a Moto and return HttpStatus.CREATED', () => {
      const moto: MotoDto = {
        modelo: 'Modelo Moto',
        anoFabricacao: 2022,
        marca: 'Marca Moto',
        rodas: 2,
        passageiros: 2,
      };

      const result = service.saveMoto(moto);

      expect(result).toBe("criado com sucesso");
    });
  });
});