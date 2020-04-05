import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  nombre = 'Lucas';
  nombreCompleto = "lucas bUtEler";
  arreglo =[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 254867.5;
  heroe={

    nombre :'Aquaman',
    direccion:{
      calle: "Av. siempre viva ",
      numero: "221",
      departamento:"B"
    } 

  }
  valorPromesa = new Promise((resolve,reject)=> {

    // Lo unico que hace es llamar al resolve en 3.5 seg
    setTimeout(()=> resolve('Llego la data!'),3500);

  })

  fecha = new Date();


}
