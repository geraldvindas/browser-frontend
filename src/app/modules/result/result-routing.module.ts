import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultComponent} from './result.component';

const routes: Routes = [
  {
    path: 'search/:query',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ResultRoutingModule { }
