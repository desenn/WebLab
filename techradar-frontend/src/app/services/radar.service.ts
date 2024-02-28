import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../technology';

const baseUrl = 'http://localhost:3000/api/technology';

@Injectable({
  providedIn: 'root'
})
export class RadarService {
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}

