import { Component } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Importamos para poder usar el servicio e importamos el Router para redireccionar el boton añadir lista  a agregarPage
  constructor( public tareasService:TareasService,
               private router:Router) {}

  agregarLista(){

    this.router.navigateByUrl("")
  }

}
