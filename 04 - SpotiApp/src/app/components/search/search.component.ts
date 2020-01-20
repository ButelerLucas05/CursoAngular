import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artistas:any[] = [];
  loading :boolean;

  //Creamos el objeto spotify de tipo SpotifyService para poder usar el servicio
  constructor(private spotify:SpotifyService) { }


  // recibe lo que se escribe en la caja de texto con el parametro #Busqueda.
  buscar(busqueda:string){

    this.loading = true;
    console.log(busqueda);
    this.spotify.getArtistas(busqueda)
      .subscribe((data:any) =>{

        this.artistas = data;
        this.loading = false;

      });

  }
 

}
