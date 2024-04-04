import { ENV_PATH_TO_WORD_CHAIN_FILE } from './word-chain.contract';

export class NoWordFileGivenError extends Error {
  constructor() {
    super(
      `The environment variable ${ENV_PATH_TO_WORD_CHAIN_FILE} must be given`,
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

export class WordIsNotInList extends Error {
  constructor() {
    super(`Word is not in list`);
    this.name = 'WordIsNotInList';
  }
}

export class PathNotFound extends Error {
  constructor() {
    super(`Path Not Found`);
    this.name = 'PathNotFound';
  }
}
