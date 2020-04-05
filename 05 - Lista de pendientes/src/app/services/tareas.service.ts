import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas:Lista[]=[];

  constructor() {

    const lista1 = new Lista('Recolectar las gemas del infinito');
    const lista2 = new Lista('Heroes a desaparecer');


    // Agregamos las listas al Array de listas
    this.listas.push(lista1,lista2);

   }


}
