import { Component, OnInit, Input } from '@angular/core';

// Importamos el router para poder pasar los parametros por URL
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items:any[] = [];

  constructor(
      private router:Router
  ) { }

  verArtista(item:any){
    let artistaId;

    if(item.type === 'artist'){

      artistaId = item.id;
    }else{

      // en caso de que se haga click en un album o un tema, devuelve el primer artista 
      artistaId = item.artists[0].id;

    }
    // se le pasa al router un array de direcciones, en este caso el primer objeto es la raiz /artist y el segundo es el ID
    this.router.navigate(['/artist', artistaId]);
  }

}
