import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'find-anagrams',
    loadChildren: () =>
      import('./anagram/anagram.module').then((m) => m.AnagramModule),
  },
  {
    path: 'word-chain',
    loadChildren: () =>
      import('./word-chain/word-chain.module').then((m) => m.WordChainModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
