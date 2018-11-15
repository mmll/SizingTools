import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { }

  getResult(input :Object){
    return this.http.get("http://localhost:4200/app/config/configData.json")
  }
}
