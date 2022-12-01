import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {User} from './user.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://630777e5c0d0f2b8013076d6.mockapi.io/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(apiUrl).pipe(
    )
  }

  getUserById(id: number):Observable<User>{
    return this.httpClient.get<User>(`${apiUrl}/${id}`);
  }

  findUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${apiUrl}/${id}`);
  }

  deleteUserById(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${apiUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(apiUrl, user, httpOptions).pipe( ); 
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(apiUrl, user, httpOptions).pipe( );
  }

  
}
