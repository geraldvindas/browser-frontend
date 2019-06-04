import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSearchEngineComponent } from './modules/main-search-engine/main-search-engine.component';
import { SecondarySearcherComponent } from './modules/secondary-searcher/secondary-searcher.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchEngineComponent,
    SecondarySearcherComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
