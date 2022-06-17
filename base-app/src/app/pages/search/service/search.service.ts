import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getDataByTitle(title: string | undefined) {

    return this.http.get<void>(baseURL + `?t=${title}&apikey=4a79b8bf` );
  }
}
