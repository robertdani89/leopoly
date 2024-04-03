import { Body, Controller, Post } from '@nestjs/common';
import { AnagramService } from './anagram.service';
import { AnagramRequestDTO } from './dto/anagram-request';
import { AnagramResponseDTO } from './dto/anagram-response';

@Controller('anagram')
export class AnagramController {
  constructor(private readonly service: AnagramService) {}

  @Post()
  async getAnagrams(
    @Body() data: AnagramRequestDTO,
  ): Promise<AnagramResponseDTO> {
    return this.service.getAnagrams(data.word);
  }
}
