import { AnagramSolver } from './anagram.solver';

describe('AnagramSolver', () => {
  describe('getCharacterValue', () => {
    it('should return a value for each character', () => {
      const solver = new AnagramSolver([]);

      expect(solver.getCharacterValue('a')).toBe(2);
      expect(solver.getCharacterValue('c')).toBe(7);
      expect(solver.getCharacterValue('z')).toBe(149);
    });

    it('should return undefined if not a char is given', () => {
      const solver = new AnagramSolver([]);

      expect(solver.getCharacterValue('aa')).toBe(undefined);
    });

    it('should return undefined if a capital char is given', () => {
      const solver = new AnagramSolver([]);

      expect(solver.getCharacterValue('A')).toBe(undefined);
    });
  });

  describe('calculateHash', () => {
    it('should return a value for a word', () => {
      const solver = new AnagramSolver([]);

      expect(solver.calculateHash('a')).toBe(2);
      expect(solver.calculateHash('aa')).toBe(4);
      expect(solver.calculateHash('abban')).toBe(5900);
      expect(solver.calculateHash('abból')).toBe(157450);
      expect(solver.calculateHash('abcúg')).toBe(172270);
    });

    it('anagrams should return the same value', () => {
      const solver = new AnagramSolver([]);

      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('aabbn'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('bbaan'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('nbbaa'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('naabb'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('baabn'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('baban'));
    });
  });

  describe('getAnagrams', () => {
    it('should return a value for a word', () => {
      const solver = new AnagramSolver([]);

      expect(solver.calculateHash('a')).toBe(2);
      expect(solver.calculateHash('aa')).toBe(4);
      expect(solver.calculateHash('abban')).toBe(5900);
      expect(solver.calculateHash('abból')).toBe(157450);
      expect(solver.calculateHash('abcúg')).toBe(172270);
    });

    it('anagrams should return the same value', () => {
      const solver = new AnagramSolver([]);

      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('aabbn'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('bbaan'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('nbbaa'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('naabb'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('baabn'));
      expect(solver.calculateHash('abban')).toBe(solver.calculateHash('baban'));
    });
  });

  describe('cacheWordList', () => {
    it('stores the hash value of words given', () => {
      const solver = new AnagramSolver([]);
      solver.cacheWordList(['a']);
      expect(solver.cached).toEqual({ 2: ['a'] });
    });
  });

  describe('getAnagrams', () => {
    it('returns only the anagrams of the word', () => {
      const word = 'cba';
      const anagrams = ['abc', 'bac'];
      const notAnagrams = ['aaa', 'bbb'];

      const solver = new AnagramSolver([...anagrams, ...notAnagrams]);
      expect(solver.getAnagrams(word)).toEqual([...anagrams]);
    });
  });
});
