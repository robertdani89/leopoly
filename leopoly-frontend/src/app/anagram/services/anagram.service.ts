import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnagramService {
  constructor(private readonly client: HttpClient) {}

  public fetchAnagrams(word: string): Observable<{ findings: string[] }> {
    return this.client.post<{ findings: string[] }>(
      '/anagram',
      { word },
      { observe: 'body' }
    );
  }
}
