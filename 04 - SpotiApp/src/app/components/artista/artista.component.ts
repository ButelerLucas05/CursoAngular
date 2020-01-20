import { Component, OnInit } from '@angular/core';
// importamos este modulo para poder tomar los parametros que se enviaron en su momento por URL
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {
  
  loading:boolean;
  artista:any= {};

  constructor( private activadeRoute:ActivatedRoute,
               private spotify:SpotifyService){ 

    this.activadeRoute.params.subscribe(params =>{

      // Desde aca estamos llamando al metodo getArtista de esta misma clase
      this.getArtista(params['id']);

    });

  }

  getArtista(id:string){

    this.loading = true;
    // Desde aca estamos llamando al metodo getArtista del servicio spotify.service
    this.spotify.getArtista( id )
      .subscribe(data => {

        this.artista = data;
        this.loading=false;

      });


  }

}
