import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
// import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }


  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }

  /*
  create(member): Observable<any> {
    return this.http.post<Product>(this.url, member);
  }
  update(member, id): Observable<any> {
    return this.http.put<Product>(`${this.url}/${id}`, member)
  }
  */
}