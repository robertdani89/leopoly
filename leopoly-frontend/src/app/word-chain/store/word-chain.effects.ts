import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WordChainService } from '../services/word-chain.service';
import {
  wordChainRequested,
  wordChainRequestFailed,
  wordChainRequestFinished,
} from './word-chain.actions';

@Injectable()
export class WordChainEffects {
  loadGuests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(wordChainRequested),
      switchMap(({ source, target }) =>
        this.service.fetchWordChain(source, target).pipe(
          map(({ chain }) => wordChainRequestFinished({ chain })),
          catchError((error) => of(wordChainRequestFailed({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: WordChainService) {}
}
