import { Component, OnInit } from '@angular/core';
// Importamos la interfaz Heroe de Heroes.service
import { HeroesService, Heroe} from '../../services/heroes.service';

// Permite rutear a traves de la funcion verHeroe()
import {Router} from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

              // Alias del servicio en el componente
              // hay que instanciar cada componente que queremos usar
  constructor(private _heroesService:HeroesService,
              private router:Router
              
              ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
   


  }

  // Funcion para redireccionar a la ruta del Heroe especifico
  verHeroe(i:number){
    this.router.navigate(['/heroe',i]);

  }

  red
}
