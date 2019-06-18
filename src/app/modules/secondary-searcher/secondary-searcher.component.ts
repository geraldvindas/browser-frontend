import { Component, OnInit } from '@angular/core';
import {QueryService} from '../../shared/services/query/query.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-secondary-searcher',
  templateUrl: './secondary-searcher.component.html',
  styleUrls: ['./secondary-searcher.component.scss']
})
export class SecondarySearcherComponent implements OnInit {


  constructor(private queryService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


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
