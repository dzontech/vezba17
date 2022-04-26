import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from './models/nba';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private http: HttpClient) { }

  getNba(): Observable<Teams> {
    return this.http.get<Teams>('assets/nba.json');
  }
}
