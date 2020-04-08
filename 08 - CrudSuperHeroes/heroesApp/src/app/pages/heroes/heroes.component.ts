import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  heroes:HeroeModel[] = [];
  // propiedad para determinar cuando esta cargando
  cargando:boolean = false;
  noItems:boolean = false;





  constructor(private heroesService:HeroesService) { }

  ngOnInit() {

    this.cargando = true;

    this.heroesService.getHeroes()
      .subscribe(resp =>{

      
        // Con esto llenamos la variable Heroes para luego correr el ngFor sobre esta variable.
        this.heroes = resp;
        this.cargando = false;
      });

    
  }

  deleteHeroe(heroe:HeroeModel,i:number){

    Swal.fire({

      title:"¡Borrar!",
      text: `¿Esta seguro que desea borrar a  ${heroe.nombre}?`,
      icon: "question",
      showConfirmButton:true,
      confirmButtonText:"Aceptar",
      showCancelButton:true,
      cancelButtonText:"Cancelar",
      cancelButtonColor:"red",



      // el Swal devuelve en la resp una promesa, si se toca el boton confirm el valor sera true, sino false
    }).then(resp => {

      // Utilizamos este value para borrar o ignorar
      if (resp.value){

        // con espe metodo se borra y renderiza, los parametros que se le pasan son desde donde borra y cuantos elementos.
      this.heroes.splice(i,1);
      this.heroesService.deleteHeroe(heroe.id).subscribe();

      }

    });
    
  }

}
