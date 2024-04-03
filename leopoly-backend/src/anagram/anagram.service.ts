import { Injectable } from '@nestjs/common';
import { firstValueFrom, Subject } from 'rxjs';
import { AnagramRepository } from './anagram.repository';
import { AnagramResponseDTO } from './dto/anagram-response';
import { AnagramSolver } from './helper/anagram.solver';

@Injectable()
export class AnagramService {
  solver: AnagramSolver;
  loaded$ = new Subject<boolean>();

  constructor(private readonly repository: AnagramRepository) {
    this.loadSolver().catch((e) => {
      throw e;
    });
  }

  async getAnagrams(word: string): Promise<AnagramResponseDTO> {
    if (!this.solver) await firstValueFrom(this.loaded$);
    return {
      findings: this.solver.getAnagrams(word),
    };
  }

  private async loadSolver() {
    const words = await this.repository.getWords();
    this.solver = new AnagramSolver(words);
    this.loaded$.next(true);
  }
}
