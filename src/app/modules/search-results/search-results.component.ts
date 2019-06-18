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

  ngOnInit() {
  }

}
