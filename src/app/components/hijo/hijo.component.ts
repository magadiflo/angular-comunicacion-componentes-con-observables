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
        console.log('Hijo: ' + nombre);        
        this.mensaje = nombre;
      });
  }

}
