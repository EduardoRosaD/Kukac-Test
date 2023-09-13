import { Test, TestingModule } from '@nestjs/testing';
import { PalindromoController } from './palindromo.controller';

describe('PalindromoController', () => {
  let controller: PalindromoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalindromoController],
    }).compile();

    controller = module.get<PalindromoController>(PalindromoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
