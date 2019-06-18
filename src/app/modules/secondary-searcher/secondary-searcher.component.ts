import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../shared/services/query/query.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileModel } from '../../core/models/file.model';

@Component({
  selector: 'app-secondary-searcher',
  templateUrl: './secondary-searcher.component.html',
  styleUrls: ['./secondary-searcher.component.scss']
})
export class SecondarySearcherComponent implements OnInit {


  resultFiles: FileModel[] = [];

  constructor(private queryService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.loadResults();
  }

  loadResults(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log('QUERY=', params);
    });
  }
}
