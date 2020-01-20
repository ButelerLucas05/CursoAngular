import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importamos reactive expresion para usar el MAP
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { }

  // Funcion para setear variables query
  getQuery(query: string) {

    const URL = "https://api.spotify.com/v1/" + query;

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQCHegONKrPjDK04Bta0YboT2vbN9f7MbPvtR4Dp8ZszpdY2HYsWIHl_nn4YQbkjeYN6AwgI60ciQOBRQbg'

    });

    return this.http.get(URL, { headers });

  }

  // Metodo GET que pega en la API de Spotify, para eso debemos importar el modulo HTTP e instanciar el objeto HTTP
  getNewReleases() {

    // Toma los parametros definidos en GetQuery!
    return this.getQuery('browse/new-releases')
      // se usa este pipe de map para modificar la info que se recibe en el GET
      .pipe(map((data: any) => {

        // Propiedad de data que devuelve los albunes
        return data.albums.items;

      }));
  }

  getArtistas(busqueda: string) {

    // Toma los parametros definidos en GetQuery!
    return this.getQuery('search?query=' + busqueda + '&type=artist&offset=0&limit=15')
      .pipe(map((data: any) => {

        // Propiedad de data que devuelve los artistas 
        return data.artists.items;

      }));
  }

  getArtista(id:string) {

      // Toma los parametros definidos en GetQuery!
      return this.getQuery('artists/'+id);
        


  }




  }
