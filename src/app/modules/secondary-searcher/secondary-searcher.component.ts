import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../shared/services/query/query.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileModel } from '../../core/models/file.model';
import {ShareResultService} from '../../shared/services/share-result/share-result.service';

@Component({
  selector: 'app-secondary-searcher',
  templateUrl: './secondary-searcher.component.html',
  styleUrls: ['./secondary-searcher.component.scss']
})
export class SecondarySearcherComponent implements OnInit {


  resultFiles: FileModel[] = [];
  time: number;
  query: string;

  constructor(private queryService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private shareService: ShareResultService) { }


  ngOnInit() {
    this.loadResults();
  }

  loadResults(): void {
    this.activatedRoute.params.subscribe(params => {
      this.query = params.query;
      if ( this.query) {
        this.getResults(this.query);
      }
    });
  }

  getResults(query) {
    this.resultFiles = [];
    this.queryService.getResults(query).subscribe( results => {
        console.log('Mensaje recuperado' , results.tiempo);
        this.time = results.tiempo;
        this.resultFiles = results.resultados;
        this.shareService.notifyChangeResults([this.resultFiles, this.time]);
      });
  }
}
