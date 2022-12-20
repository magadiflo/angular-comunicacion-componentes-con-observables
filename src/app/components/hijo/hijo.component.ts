import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  mensaje: string = 'Mensaje...!'; 

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.nombre$
      .subscribe((nombre: string) => {
        //* Veremos que en el console.log este se está repitiendo varias veces porque, si bien es cierto,
        //* este componente HijoComponent, se destruye, pero la subscripción realizada al nombre$ sigue
        //* estando en memoria
        console.log('Hijo: ' + nombre); 
        this.mensaje = nombre;
      });
  }

}
