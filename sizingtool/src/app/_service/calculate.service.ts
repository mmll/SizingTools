import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  getResult(input :Object){
    return {test:'done'};
  }
}
