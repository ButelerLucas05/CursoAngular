// los Input permiten recibir propiedades desde afuera!

import { Component, OnInit, Input } from '@angular/core';
// Permite rutear a traves de la funcion verHeroe()
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls:['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Permite recibir el heroe desde afuera
  @Input() heroe:any= {} ;
  @Input() index:number;


  constructor( private router:Router) { }

  ngOnInit() {
  }

  verHeroe(){

    this.router.navigate(['/heroe',this.index]);

  }

}
