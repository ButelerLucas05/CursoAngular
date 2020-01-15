import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router

  ) { }

  ngOnInit() {
  }

  buscarHeroe(busqueda:string){
    // la variable busqueda se define en el app route, al momnento de querere pasar el parametro
    this.router.navigate(['/buscar', busqueda]);

  }
}
