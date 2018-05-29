import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/share';
import { ResponseObject } from '../entities/ResponseObject';

@Injectable()
export class DownloaderService {

  constructor(private http: HttpClient) { }

  fetchList(){
      const endpoint = 'http://localhost:8585/get/files';
      return this.http.get<ResponseObject>(endpoint, { observe: 'response' });
  }

  deleteOne(id: number){
  const endpoint = 'http://localhost:8585/delete/file/' + id;
    this.http.get(endpoint).subscribe();
  }

}
