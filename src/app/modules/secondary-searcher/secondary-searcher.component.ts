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
    this.loadQuery();
  }

  loadQuery(): void {
    this.activatedRoute.params.subscribe(params => {
      const query = params.query;
      if (query) {
        this.queryService.getResults(query).subscribe( result => {
          console.log('Mensaje recuperado' , result);
        });
      }
    });
  }
}
