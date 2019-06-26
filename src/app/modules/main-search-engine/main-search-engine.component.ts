import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-search-engine',
  templateUrl: './main-search-engine.component.html',
  styleUrls: ['./main-search-engine.component.scss']
})
export class MainSearchEngineComponent implements OnInit {

  query: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   }

  getResults(query) {
    if (query !== undefined) {
      this.router.navigate([`../search/${query}`], {relativeTo: this.route});
    }
  }

  keyDownClick(event, query) {
    if (event.keyCode === 13) {
      this.getResults(query);
    }
  }
}
