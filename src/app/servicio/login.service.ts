import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url:string = 'https://localhost:8080/rperfil/login';

  constructor(private http: HttpClient) { }

  login(email:string, password:string) {
    return this.http.post(this.url, {
      email: email,
      password: password     
    });     
  }

}
