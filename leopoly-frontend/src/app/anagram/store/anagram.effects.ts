import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AnagramService } from '../services/anagram.service';
import {
  anagramsRequested,
  anagramsRequestFailed,
  anagramsRequestFinished,
} from './anagram.actions';

@Injectable()
export class AnagramEffects {
  loadGuests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(anagramsRequested),
      switchMap(({ word }) =>
        this.service.fetchAnagrams(word).pipe(
          map(({ findings }) => anagramsRequestFinished({ findings })),
          catchError((error) => of(anagramsRequestFailed({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: AnagramService) {}
}
