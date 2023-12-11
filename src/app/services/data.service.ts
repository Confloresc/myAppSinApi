  

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://apimocha.com/asistenciaqr/data';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    console.log("Hello There!")
    return this.http.get<any[]>(this.apiUrl);
  }
}
