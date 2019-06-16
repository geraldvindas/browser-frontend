import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainSearchEngineComponent} from './modules/main-search-engine/main-search-engine.component';
import {SecondarySearcherComponent} from './modules/secondary-searcher/secondary-searcher.component';
import {SearchResultsComponent} from './modules/search-results/search-results.component';
import {ResultComponent} from './modules/result/result.component';
import {MainSearchEngineModule} from './modules/main-search-engine/main-search-engine.module';
import {SearchResultsRoutingModule} from './modules/search-results/search-results-routing.module';
import {ResultRoutingModule} from './modules/result/result-routing.module';
import {RouterModule} from '@angular/router';

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
