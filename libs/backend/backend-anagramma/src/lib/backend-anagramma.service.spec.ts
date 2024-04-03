import { Test } from '@nestjs/testing';
import { BackendAnagrammaService } from './backend-anagramma.service';

describe('BackendAnagrammaService', () => {
  let service: BackendAnagrammaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendAnagrammaService],
    }).compile();

    service = module.get(BackendAnagrammaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
