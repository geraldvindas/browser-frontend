import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../core/models/file.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() results: FileModel[];
  constructor() { }

  resumenMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros venenatis,' +
    ' tempor nunc id, efficitur leo. Aliquam mattis, ipsum et vehicula suscipit, risus augue egestas arcu, ' +
    'sit amet rutrum libero tellus eu nisl. Aliquam egestas arcu ut enim aliquam facilisis. Nam molestie cursus lorem ut malesuada.' +
    ' Morbi hendrerit ante metus, vel sodales est ornare vitae. Donec feugiat, enim non laoreet consectetur, ligula eros congue ex, ' +
    'ac imperdiet ex odio in urna.'

  resultsMock = [['Titulo1', 'Similitud1', this.resumenMock],
                 ['Titulo2', 'Similitud2', this.resumenMock],
                 ['Titulo3', 'Similitud3', this.resumenMock],
                 ['Titulo4', 'Similitud4', this.resumenMock]];

  ngOnInit() {
  }

}
