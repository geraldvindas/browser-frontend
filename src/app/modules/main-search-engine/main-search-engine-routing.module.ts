import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainSearchEngineComponent} from './main-search-engine.component';

const routes: Routes = [
  {
    path: '',
    component: MainSearchEngineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MainSearchEngineRoutingModule { }
