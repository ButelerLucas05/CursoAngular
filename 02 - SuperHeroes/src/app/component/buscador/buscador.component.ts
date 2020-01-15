import { Component, OnInit ,Input} from '@angular/core';
import { HeroesService } from '../../services/heroes.service'

// modulo para tomar la variable que se pasa por url
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[]= [];
  busqueda:string;

  constructor(  private _activatedRouter:ActivatedRoute,
                private _heroeService:HeroesService
  ) { 


  }

  ngOnInit() {

    
    this._activatedRouter.params.subscribe(params => {
    // el paramentro busqueda se define en el app rout
    this.busqueda = params['busqueda'];
    this.heroes = this._heroeService.buscarHeroe(params['busqueda']);


    })

  }



}
