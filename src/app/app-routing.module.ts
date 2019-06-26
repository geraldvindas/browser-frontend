import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxPaginationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
