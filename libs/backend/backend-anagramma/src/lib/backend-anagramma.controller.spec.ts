import { Test } from '@nestjs/testing';
import { BackendAnagrammaController } from './backend-anagramma.controller';
import { BackendAnagrammaService } from './backend-anagramma.service';

describe('BackendAnagrammaController', () => {
  let controller: BackendAnagrammaController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendAnagrammaService],
      controllers: [BackendAnagrammaController],
    }).compile();

    controller = module.get(BackendAnagrammaController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
