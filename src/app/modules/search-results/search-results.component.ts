import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../core/models/file.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, AfterViewInit {

  @Input() results: FileModel[];
  @Input() time: number;
  @ViewChild(MatSort, { read: true, static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { read: true, static: false }) paginator: MatPaginator;
  public dataSource = new MatTableDataSource<FileModel>();

  constructor() { }

  resumenMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros venenatis,' +
    ' tempor nunc id, efficitur leo. Aliquam mattis, ipsum et vehicula suscipit, risus augue egestas arcu, ' +
    'sit amet rutrum libero tellus eu nisl. Aliquam egestas arcu ut enim aliquam facilisis. Nam molestie cursus lorem ut malesuada.' +
    ' Morbi hendrerit ante metus, vel sodales est ornare vitae. Donec feugiat, enim non laoreet consectetur, ligula eros congue ex, ' +
    'ac imperdiet ex odio in urna.';

  resultsMock = [['Titulo1', 'Similitud1', this.resumenMock],
                 ['Titulo2', 'Similitud2', this.resumenMock],
                 ['Titulo3', 'Similitud3', this.resumenMock],
                 ['Titulo4', 'Similitud4', this.resumenMock]];

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
