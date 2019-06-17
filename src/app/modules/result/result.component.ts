import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadQuery();
  }

  loadQuery(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log('QUERY=', params);
    });
  }

}

