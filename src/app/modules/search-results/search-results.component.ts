import { Component, OnInit } from '@angular/core';
import { FileModel } from '../../core/models/file.model';
import { ShareResultService } from '../../shared/services/share-result/share-result.service';
import {QueryService} from "../../shared/services/query/query.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  results: FileModel[];
  time: number;  config: any;
  showResults = false;
  showTime = false;

  resumenMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros venenatis,' +
    ' tempor nunc id, efficitur leo. Aliquam mattis, ipsum et vehicula suscipit, risus augue egestas arcu, ' +
    'sit amet rutrum libero tellus eu nisl. Aliquam egestas arcu ut enim aliquam facilisis. Nam molestie cursus lorem ut malesuada.' +
    ' Morbi hendrerit ante metus, vel sodales est ornare vitae. Donec feugiat, enim non laoreet consectetur, ligula eros congue ex, ' +
    'ac imperdiet ex odio in urna.';

  constructor(private shareService: ShareResultService,
              private queryService: QueryService,
              private router: Router) {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getMock() {
    const c = new FileModel();
    c.urlOriginal = 'www.google.com';
    c.relevancia = 10.1;
    c.nombreDocumento = 'Mocks';
    c.rutaCache = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    c.resumen = this.resumenMock;
    return c;
  }

  ngOnInit() {
    this.shareService.results.subscribe( data => {
      this.time = null;
      this.results = [];

      if ( data !== null) {
        this.results = data[0];
        this.time = data[1];

        this.showResults = this.results.length !== 0;
        this.showTime = this.time !== null;

        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.results.length
        };
      }
    });
  }

  replaceRoute(rutaCache: string) {
    return rutaCache.replace('navegador-backend/Coleccion/', '');
  }

  getCacheDocument(document) {
    // this.router.navigate([`http://localhost:5000/search/${document}`]);
    // return this.queryService.getCacheDocument(document)
    console.log('Reeemplazo', document.split('/').join('+'));
    return `http://localhost:5000/result/cache/${document.split('/').join('+')}`;
  }
}
