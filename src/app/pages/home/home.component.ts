import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  cambiarNombre(): void {
    console.log('NavBar: Martín Díaz');    
    this.dataService.nombre$.emit('Martín Díaz');
  }

}
