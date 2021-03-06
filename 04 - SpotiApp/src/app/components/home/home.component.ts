import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  
  newReleases:any[] =[];
  loading:boolean;
  constructor(private spotify:SpotifyService) {

    this.loading = true;
    // al momento de llamar el HomeComponent llamamos la funcion GET del spotify.service para que traiga los releases
    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        console.log(data);

        // recuperamos la info de data 
        this.newReleases = data;
        this.loading = false;
      });

    

   }  



}
