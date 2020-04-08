import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
// Utilizamos este operador para mapear los ids y no duplicar registros de personajes
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://crudsuperheroes.firebaseio.com'
  constructor(private http:HttpClient) { }



  crearHeroe(heroe:HeroeModel){

      // Enviamos el objeto heroe a la api de firebase, lo que devuelve es el ID con el cual crea el registro en la base
      return this.http.post(`${this.url}/heroes.json`,heroe)
        .pipe(

          // lo que hace es mapear la repsuesta para que devuelva el heroe completo con todos sus atributos no solo el ID(figura como Name en la DB)
          map( (resp:any) => {

          // de esta forma llenamos el ID del objeto heroe para eliminar o actualizar
            heroe.id = resp.name;
            return heroe;
          })
        )
  }

  actualizarHeroe(heroe:HeroeModel){

    // Tomamos todos los campos de heroe y los cargamos en heroeTemp, luego borramos el ID
    // y pasamos el heroe temp al Put para que no cree el campo ID en el heroe actualizado
    const heroeTemp  ={

      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`,heroeTemp);

  }

  getHeroes(){

    // el get por defecto devuelve un objeto el cual no es iterable por el ngFor,
    // por eso creamos un arreglo en base a estos objetos!
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(resp => this.crearArrelgo(resp) )
      );


  }
  // se utiliza este metodo para crear el arreglo a partir del objeto que devuelve Firebase
  private crearArrelgo(heroesObj:object){

    const heroes:HeroeModel[] = [];

    Object.keys(heroesObj).forEach(key =>{

      const heroe: HeroeModel = heroesObj[key];
      heroe.id =key;

      heroes.push(heroe);
      
    });

    return heroes;
    if (heroesObj === null){
      return [];
    }

    
  }

  getHeroe(id:string){

    return this.http.get(`${this.url}/heroes/${id}.json`);

  }

  deleteHeroe(id:string){

    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}
