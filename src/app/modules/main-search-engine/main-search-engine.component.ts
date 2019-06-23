import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search-engine',
  templateUrl: './main-search-engine.component.html',
  styleUrls: ['./main-search-engine.component.scss']
})
export class MainSearchEngineComponent implements OnInit {

  query: string;

  constructor() { }

  ngOnInit() {
   }

  keyDownClick(event, searchValue) {
    if (event.keyCode === 13) {
      // router
    }
  }
}
