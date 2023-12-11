// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';
// import { Users, Usuario } from '../interfaces/users';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   users: Usuario;
//   username: string = '';
//   opc: boolean = false;

//   constructor(private storage: Storage, private http: HttpClient) { }

//   async setUser() {
//     await fetch('https://apimocha.com/registrappqr/users').then(response => {
//       return response.json();
//     }).then(data => {
//       this.users = data;
//     });
//   }

//   async getUser() {
//     return this.http.get('https://apimocha.com/registrappqr/users')
//       .toPromise()
//       .then(resp => {
//         const usr = resp as Users;
//         return Promise.resolve(usr);
//       });
//   }
  
// }
  

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