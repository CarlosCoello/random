import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../model/ItunesItems';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  url: String = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  searchItunes(term: String): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.url}?term=${term}&limit=24`)
                .pipe(
                  map( res => {
                    return res.results.map(item => {
                      return new Items(
                        item.artistName,
                        item.artistViewUrl,
                        item.artworkUrl100,
                        item.previewUrl
                      );
                    });
                  })
                );
  }
}
