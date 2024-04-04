import { Injectable } from '@nestjs/common';
import { firstValueFrom, Subject } from 'rxjs';
import { WordChainResponseDTO } from './dto/word-chain-response';
import { WordChainSolver } from './helper/word-chain.solver';
import { WordChainRepository } from './word-chain.repository';

@Injectable()
export class WordChainService {
  solver: WordChainSolver;
  loaded$ = new Subject<boolean>();

  constructor(private readonly repository: WordChainRepository) {
    this.loadSolver().catch((e) => {
      throw e;
    });
  }

  async getWordChain(
    source: string,
    target: string,
  ): Promise<WordChainResponseDTO> {
    if (!this.solver) await firstValueFrom(this.loaded$);
    return {
      chain: this.solver.findChain(source, target),
    };
  }

  private async loadSolver() {
    const words = await this.repository.getWords();
    this.solver = new WordChainSolver(words);
    this.loaded$.next(true);
  }
}
