import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = 'Mensaje...!';
  nombreSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //* Cuando nosotros disparamos un subscribe, da como producto una subscripción y esa es la que almacenamos en la variable nombreSubscription
    this.nombreSubscription = this.dataService.nombre$
      .subscribe((nombre: string) => {
        //* Veremos que en el console.log este se está repitiendo varias veces porque, si bien es cierto,
        //* este componente HijoComponent, se destruye, pero la subscripción realizada al nombre$ sigue
        //* estando en memoria, deberíamos destruirla en el ngOnDestroy
        console.log('Hijo: ' + nombre);
        this.mensaje = nombre;
      });
  }

  ngOnDestroy(): void {
    //* De esta manera destruimos la subscripción realizada. Ahora cuando veamos el console.log(), veremos
    //* que se muestra una vez el log cada que se entra a este componente.
    console.log('Hijo: Destruyendo subscribe()');
    this.nombreSubscription.unsubscribe();
  }

}
