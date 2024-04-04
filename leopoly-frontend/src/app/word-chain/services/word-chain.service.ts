import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WordChainService {
  constructor(private readonly client: HttpClient) {}

  public fetchWordChain(
    source: string,
    target: string
  ): Observable<{ chain: string[] }> {
    return this.client.post<{ chain: string[] }>(
      '/word-chain',
      { source, target },
      { observe: 'body' }
    );
  }
}
