import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //* El $ solo indica que es un evento, un observable, es decir, solo es una nomenclatura
  nombre$ = new EventEmitter<string>();

  constructor() { }

  
}
