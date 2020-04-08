import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes:Routes=[

  {path:'heroes' , component:HeroesComponent},
  {path:'heroe/:id' , component:HeroeComponent},  
  //cualquier otra ruta
  {path:'**' ,pathMatch:'full', redirectTo: 'heroes'}

]

  

@NgModule({

  imports: [
      RouterModule.forRoot(routes),

  ],
  // permite que se use de forma global el RouterModule
  exports: [

    RouterModule
  ]
})
export class AppRoutingModule { }
