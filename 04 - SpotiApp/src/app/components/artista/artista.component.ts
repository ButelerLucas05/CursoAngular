import { Component, OnInit } from '@angular/core';
// importamos este modulo para poder tomar los parametros que se enviaron en su momento por URL
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {
  
  loading:boolean;
  artista:any= {};
  topTracks:any = {};

  constructor( private activadeRoute:ActivatedRoute,
               private spotify:SpotifyService){ 

    this.activadeRoute.params.subscribe(params =>{

      // Desde aca estamos llamando al metodo getArtista de esta misma clase
      this.getArtista(params['id']);
      // Desde aca estamos llamando al metodo getTopTracks de esta misma clase
      this.getTopTracks(params['id']);

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

  getTopTracks(id:string){
    // Desde aca estamos llamando al metodo getArtista del servicio spotify.service
    this.spotify.getTopTracks(id)
      .subscribe(data=> {

        this.topTracks = data;

      })
  }

}
