import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AnagramController } from './anagram.controller';
import { AnagramService } from './anagram.service';

@Injectable()
class MockAnagramService {
  getAnagrams() {
    return { findings: ['hello'] };
  }
}

describe('AnagramController', () => {
  let controller: AnagramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnagramController],
      providers: [
        {
          provide: AnagramService,
          useClass: MockAnagramService,
        },
      ],
    }).compile();

    controller = app.get<AnagramController>(AnagramController);
  });

  describe('getAnagrams', () => {
    it('should call the service', async () => {
      const res = await controller.getAnagrams({ word: 'test' });
      expect(res).toEqual({
        findings: ['hello'],
      });
    });
  });
});
