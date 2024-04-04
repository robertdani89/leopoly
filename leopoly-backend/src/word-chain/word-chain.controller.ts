import { Body, Controller, Post } from '@nestjs/common';
import { WordChainRequestDTO } from './dto/word-chain-request';
import { WordChainResponseDTO } from './dto/word-chain-response';
import { WordChainService } from './word-chain.service';

@Controller('word-chain')
export class WordChainController {
  constructor(private readonly service: WordChainService) {}

  @Post()
  async getWordChain(
    @Body() data: WordChainRequestDTO,
  ): Promise<WordChainResponseDTO> {
    return this.service.getWordChain(data.source, data.target);
  }
}
