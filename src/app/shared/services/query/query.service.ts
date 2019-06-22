import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileModel} from '../../../core/models/file.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment.prod';
import {ResultModel} from '../../../core/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});


  constructor(private http: HttpClient) { }


  getResults(query): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.urlServerBackend}/result/query/${query}`);
  }



}
