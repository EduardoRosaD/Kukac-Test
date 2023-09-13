import { Test, TestingModule } from '@nestjs/testing';
import { CepsController } from './ceps.controller';

describe('CepsController', () => {
  let controller: CepsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepsController],
    }).compile();

    controller = module.get<CepsController>(CepsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
