import { Component } from '@angular/core';
import { AnagramFacade } from './store/anagram.facade';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.scss',
})
export class AnagramComponent {
  findings = this.facade.findings$;

  constructor(private readonly facade: AnagramFacade) {}

  onWordPicked(word: string) {
    this.facade.getAnagrams(word);
  }
}
