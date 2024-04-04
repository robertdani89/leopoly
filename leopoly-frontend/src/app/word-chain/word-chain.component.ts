import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { WordChainFacade } from './store/word-chain.facade';

@Component({
  selector: 'app-word-chain',
  templateUrl: './word-chain.component.html',
  styleUrl: './word-chain.component.scss',
})
export class WordChainComponent implements OnDestroy {
  chain = this.facade.chain$;
  error = this.facade.error$;

  onDestroy$ = new Subject();

  constructor(
    private readonly facade: WordChainFacade,
    private readonly dialog: MatDialog
  ) {
    this.error.pipe(takeUntil(this.onDestroy$)).subscribe((e) => {
      if (!e) return;
      this.dialog.open(AlertDialogComponent, {
        data: {
          message: 'An error has occurred',
        },
      });
    });
  }

  onWordsPicked({ source, target }: { source: string; target: string }) {
    this.facade.getWordChain(source, target);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }
}
