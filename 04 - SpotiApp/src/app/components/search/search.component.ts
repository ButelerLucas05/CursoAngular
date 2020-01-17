import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artistas:any[] = [];

  //Creamos el objeto spotify de tipo SpotifyService para poder usar el servicio
  constructor(private spotify:SpotifyService) { }


  // recibe lo que se escribe en la caja de texto con el parametro #Busqueda.
  buscar(busqueda:string){

    
    console.log(busqueda);
    this.spotify.getArtista(busqueda)
      .subscribe((data:any) =>{

        this.artistas = data;

      });

  }
 

}
