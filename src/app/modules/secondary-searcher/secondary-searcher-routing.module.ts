import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondarySearcherComponent } from './secondary-searcher.component';

const routes: Routes = [
  {
    path: 'search/:query',
    component: SecondarySearcherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SecondarySearcherRoutingModule { }
