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
  haveResult: boolean;

  constructor(private queryService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private shareService: ShareResultService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.haveResult = false;
    this.resultFiles = [];
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

  changeQuery(query) {
    this.router.navigate([`../${query}`], {relativeTo: this.route});
  }

  getResults(query) {
    this.time = null;
    this.resultFiles = [];
    this.haveResult = false;
    this.shareService.notifyChangeResults([this.resultFiles, this.time]);
    this.queryService.getResults(query).subscribe( results => {
      this.time = results.tiempo;
      if (results.resultados.length !== 0) {
        this.resultFiles = results.resultados;
      }
      this.haveResult = true;
      this.shareService.notifyChangeResults([this.resultFiles, this.time]);
    });
  }

  keyDownClick(event, query) {
    if (event.keyCode === 13) {
      this.changeQuery(query);
    }
  }
}
