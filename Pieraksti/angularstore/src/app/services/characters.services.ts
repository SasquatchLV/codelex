import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/location`).pipe(
      map((locations: any) => {
        const results = locations.results;
      })
    );
  }
}
