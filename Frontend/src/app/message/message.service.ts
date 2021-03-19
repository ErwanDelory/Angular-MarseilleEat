import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getAllRestaurants(): Observable<Data> {
    const adr: string = environment.url + 'getRestaurants';
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  getBestRestaurants(): Observable<Data> {
    const adr: string = environment.url + 'getAccueil';
    return this.http.get<Data>(adr, { withCredentials: true });
  }
}
