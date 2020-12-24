import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeveloperHttpService {
  constructor(private http: HttpClient) {}

  homeNews(): Observable<any> {
    return this.http
      .get<any>(
        'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XAXGOIjPAOh69PimFqiAckcZrEUAuKp6'
      )
      .pipe(
        map((response) => (response ? response.results : [])),
        catchError((error) => of([]))
      );
  }
  worldNews(): Observable<any> {
    return this.http
      .get<any>(
        'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=XAXGOIjPAOh69PimFqiAckcZrEUAuKp6'
      )
      .pipe(
        map((response) => (response ? response.results : [])),
        catchError((error) => of([]))
      );
  }
  usNews(): Observable<any> {
    return this.http
      .get<any>(
        'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=XAXGOIjPAOh69PimFqiAckcZrEUAuKp6'
      )
      .pipe(
        map((response) => (response ? response.results : [])),
        catchError((error) => of([]))
      );
  }
  scienceNews(): Observable<any> {
    return this.http
      .get<any>(
        'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=XAXGOIjPAOh69PimFqiAckcZrEUAuKp6'
      )
      .pipe(
        map((response) => (response ? response.results : [])),
        catchError((error) => of([]))
      );
  }
  artsNews(): Observable<any> {
    return this.http
      .get<any>(
        'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=XAXGOIjPAOh69PimFqiAckcZrEUAuKp6'
      )
      .pipe(
        map((response) => (response ? response.results : [])),
        catchError((error) => of([]))
      );
  }
}
