import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/share';
import { ResponseObject } from '../entities/ResponseObject';

@Injectable()
export class UploaderService {

  constructor(private http: HttpClient) { }


  postFile(title: string, description: string, fileToUpload: File){
        const endpoint = 'http://localhost:8585/api/upload';
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('files', fileToUpload, fileToUpload.name);
        return this.http.post<ResponseObject>(endpoint, formData, { observe: 'response' });

  }




}
