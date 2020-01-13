import { Component, OnInit } from '@angular/core';

// se ultiliza para agarrar el parametro por URL
import{ActivatedRoute} from  '@angular/router'
// Importamos el servicio getHeroe de Heroes.service
import{HeroesService} from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent  {

  // Creamos la variable heroe para poder recibir el heroe correspondiente
  heroe:any={};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroeService:HeroesService
  ) {
    // Devuelve los parametros obetenidos por url
    this.activatedRoute.params.subscribe(params => {

      // El nombre del parametro esta definido en el archivo app.route
      this.heroe = this._heroeService.getHeroe(params['id']);
    });

   }



}
