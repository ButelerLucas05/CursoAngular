import { Component, OnInit } from '@angular/core';
// Importamos la interfaz Heroe de Heroes.service
import { HeroesService, Heroe} from '../../services/heroes.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = []

                      // Alias del servicio en el componente
  constructor(private _heroesService:HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
   


  }

}
