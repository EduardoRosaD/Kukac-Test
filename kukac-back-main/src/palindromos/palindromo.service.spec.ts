import { Test, TestingModule } from '@nestjs/testing';
import { PalindromoService } from './palindromo.service';

describe('PalindromoService', () => {
  let service: PalindromoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalindromoService],
    }).compile();

    service = module.get<PalindromoService>(PalindromoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
