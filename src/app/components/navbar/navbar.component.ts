import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensaje: string = 'Navbar!';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.nombre$
      .subscribe((nombre: string) => {
        console.log(`Navbar: ${nombre}`);//* Veremos que esto en el console.log mostrará siempre el mismo por que NO SE ESTÁ DESTRUYENDO, es el mismo NAVBAR
        this.mensaje = nombre;
      });
  }

}
