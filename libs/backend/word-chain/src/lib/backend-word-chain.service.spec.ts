import { Test } from '@nestjs/testing';
import { BackendWordChainService } from './backend-word-chain.service';

describe('BackendWordChainService', () => {
  let service: BackendWordChainService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendWordChainService],
    }).compile();

    service = module.get(BackendWordChainService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
