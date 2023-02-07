import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   }

  public getData(search: string): Observable<any>  {
    let url = ("https://openlibrary.org/search.json?q=" + search);
    return this.http.get(url);
    
  }

  public getSubjectData(search: string): Observable<any> {
    let url = ("http://openlibrary.org/subjects/" + search +".json");
    return this.http.get(url);
  }
}
