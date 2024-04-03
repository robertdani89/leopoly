import { ENV_PATH_TO_ANAGRAMS_FILE } from './anagram.contract';

export class NoWordFileGivenError extends Error {
  constructor() {
    super(
      `The environment variable ${ENV_PATH_TO_ANAGRAMS_FILE} must be given`,
    );
    this.name = 'NoWordFileFoundError';
  }
}

export class NoWordFileFoundError extends Error {
  constructor(path: string) {
    super(`Could not find word file at ${path}`);
    this.name = 'NoWordFileFoundError';
  }
}

export class SolverIsNotLoaded extends Error {
  constructor() {
    super(`Anagram solver did not load in time`);
    this.name = 'SolverIsNotLoaded';
  }
}
