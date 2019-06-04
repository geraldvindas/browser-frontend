import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSearchEngineComponent } from './modules/main-search-engine/main-search-engine.component';
import { SecondarySearcherComponent } from './modules/secondary-searcher/secondary-searcher.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SearchResultsRoutingModule} from './modules/search-results/search-results-routing.module';
import { ResultComponent } from './modules/result/result.component';
import {ResultRoutingModule} from './modules/result/result-routing.module';
import {MainSearchEngineModule} from './modules/main-search-engine/main-search-engine.module';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchEngineComponent,
    SecondarySearcherComponent,
    SearchResultsComponent,
    ResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MainSearchEngineModule,
    ResultRoutingModule,
    RouterModule,
    SearchResultsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
