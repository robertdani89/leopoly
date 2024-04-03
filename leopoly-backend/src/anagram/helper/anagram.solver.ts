import { hunCharacters, primeNumbers } from './anagram.solver.constants';

export class AnagramSolver {
  cached: { [key: number]: string[] } = {};

  constructor(words: string[]) {
    this.cacheWordList(words);
  }

  getAnagrams(word: string) {
    word = word.toLowerCase();
    const value = this.calculateHash(word);
    return this.cached[value] ?? [];
  }

  cacheWordList(words: string[]) {
    for (let w of words) {
      w = w.toLowerCase();
      const value = this.calculateHash(w);
      this.cached[value] ??= [];
      this.cached[value].push(w);
    }
  }

  calculateHash(word: string): number {
    return Array.from(word).reduce((p, c) => p * this.getCharacterValue(c), 1);
  }

  getCharacterValue(c: string): number | undefined {
    return primeNumbers[hunCharacters.indexOf(c)];
  }
}
