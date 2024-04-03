import { Test } from '@nestjs/testing';
import { BackendWordChainController } from './backend-word-chain.controller';
import { BackendWordChainService } from './backend-word-chain.service';

describe('BackendWordChainController', () => {
  let controller: BackendWordChainController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendWordChainService],
      controllers: [BackendWordChainController],
    }).compile();

    controller = module.get(BackendWordChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
