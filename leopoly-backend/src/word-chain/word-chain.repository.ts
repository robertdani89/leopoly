import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { clone } from 'lodash';
import { firstValueFrom, Subject } from 'rxjs';
import { ENV_PATH_TO_WORD_CHAIN_FILE } from './word-chain.contract';
import {
  NoWordFileFoundError,
  NoWordFileGivenError,
} from './word-chain.errors';

@Injectable()
export class WordChainRepository {
  private words: string[];

  loaded$ = new Subject<boolean>();

  public async getWords(): Promise<string[]> {
    if (!this.words) await firstValueFrom(this.loaded$);
    return clone(this.words);
  }

  constructor(private configService: ConfigService) {
    this.loadWordsFromFile().catch((e) => {
      throw e;
    });
  }

  async loadWordsFromFile() {
    const pathToFile = this.configService.get(ENV_PATH_TO_WORD_CHAIN_FILE);
    if (!pathToFile) throw new NoWordFileGivenError();
    if (!existsSync(pathToFile)) throw new NoWordFileFoundError(pathToFile);
    const data = await readFile(pathToFile, { encoding: 'utf8' });
    this.words = data.split('\n');
    this.loaded$.next(true);
  }
}
