import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Company} from './company.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://630777e5c0d0f2b8013076d6.mockapi.io/api/v1/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Company[]>{
    return this.httpClient.get<Company[]>(apiUrl).pipe(
    )
  }
}
