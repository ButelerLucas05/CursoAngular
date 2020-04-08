// Librerias propias de Angular
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

//Elementos creados por mi
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

//libreria instalada con npm install sweetalert2 que se utiliza para mostrar mensajes 
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  // Inicializamos el objeto heroe 
  heroe = new HeroeModel();

  // dentro del constructor instanciamos el servicio para poder usarlo en este componente
  // el segundo servicio permite leer la url para tomar el ID 
  constructor(private heroeService:HeroesService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    //Obtenemos el Id por el url
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id !== 'nuevo'){

    // la respuesta devuelve el objeto heroeModel pero con los parametros nombre,poder y vivo, por eso completamos el ID con el parametro
      this.heroeService.getHeroe(id)
        .subscribe((resp: HeroeModel) => {

          this.heroe = resp;
          this.heroe.id = id;

        });

    }

  }

  guardar(form:NgForm){
    

    if(form.invalid){

      console.log("Formulario no valido");
      return;


    }

    // Creamos y mostramos el cartel de cargando
    Swal.fire({

      title: 'Espere',
      text: 'Guardando infomacion',
      allowOutsideClick: false,
      icon:'info'
    });
    Swal.showLoading();

    
  // Observable de esta peticion para saber cuando mostrar el mensaje de transaccion completada
  let peticion:Observable<any>;

  if (this.heroe.id){

    peticion = this.heroeService.actualizarHeroe(this.heroe)
     

  }else {

        // para poder insertar un heroe desde el componente llamamos al servicio y le pasamos el heroe que viene del formulario
        peticion = this.heroeService.crearHeroe(this.heroe)
        
    }
  
    // nos suscribimos a la peticion para saber cuando esta fue completada correctamente y mostramos el Swal succes.
    peticion.subscribe(resp => {

      Swal.fire({
 
        title: this.heroe.nombre,
        text:'Se actualizo correctamente',
        icon:'success'

      })

    });
  }

}
