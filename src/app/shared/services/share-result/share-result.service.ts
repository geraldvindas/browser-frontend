import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileModel} from '../../../core/models/file.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment.prod';
import {ResultModel} from '../../../core/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ShareResultService {


  private messageSource = new BehaviorSubject<any>(null);
  results = this.messageSource.asObservable();


  constructor() {
  }

  /**
   * Notify when the MFReport changes.
   * @param mFReport New MFReport
   */
  notifyChangeResults( data: any) {
    this.messageSource.next(data);
  }


}
