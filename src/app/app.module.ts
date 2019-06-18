import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainSearchEngineComponent} from './modules/main-search-engine/main-search-engine.component';
import {SecondarySearcherComponent} from './modules/secondary-searcher/secondary-searcher.component';
import {SearchResultsComponent} from './modules/search-results/search-results.component';
import {MainSearchEngineModule} from './modules/main-search-engine/main-search-engine.module';
import {SearchResultsRoutingModule} from './modules/search-results/search-results-routing.module';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SecondarySearcherRoutingModule} from './modules/secondary-searcher/secondary-searcher-routing.module';
import {QueryService} from './shared/services/query/query.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchEngineComponent,
    SecondarySearcherComponent,
    SearchResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MainSearchEngineModule,
    SecondarySearcherRoutingModule,
    RouterModule,
    SearchResultsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
