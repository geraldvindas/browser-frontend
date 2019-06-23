import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../core/models/file.model';
import {MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {ShareResultService} from '../../shared/services/share-result/share-result.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, AfterViewInit {

  results: FileModel[];
  time: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public dataSource = new MatTableDataSource<FileModel>();
  dialogConfig: MatDialogConfig;
  public displayedColumns: string[];

  constructor(private shareService: ShareResultService) {
    this.displayedColumns = ['resultados'];
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;
    console.log('Me creo');

  }

  resumenMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros venenatis,' +
    ' tempor nunc id, efficitur leo. Aliquam mattis, ipsum et vehicula suscipit, risus augue egestas arcu, ' +
    'sit amet rutrum libero tellus eu nisl. Aliquam egestas arcu ut enim aliquam facilisis. Nam molestie cursus lorem ut malesuada.' +
    ' Morbi hendrerit ante metus, vel sodales est ornare vitae. Donec feugiat, enim non laoreet consectetur, ligula eros congue ex, ' +
    'ac imperdiet ex odio in urna.';

  getMock() {
    const c = new FileModel();
    c.urlOriginal = 'www.google.com';
    c.relevancia = 10.1;
    c.nombreDocumento = 'Mocks';
    c.rutaCache = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    return c;
  }



  ngOnInit() {
    this.results = [this.getMock(), this.getMock(), this.getMock()];
    this.dataSource.paginator = this.paginator;
    this.shareService.results.subscribe( data => {
      if ( data !== null) {
        this.results = data[0];
        this.time = data[1];
        this.dataSource.data = this.results;
      }
    });
    console.log('Me init');
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
