// importamos todos los componentes a usar

import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import {HeroeComponent} from './component/heroe/heroe.component';
import {BuscadorComponent} from './component/buscador/buscador.component';


const APP_ROUTES: Routes = [

    // nombre de la ruta, y que componente carga con esa ruta!
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
     // en este caso se le pasa un ID para hacer referencia al heroe indicado
    {path:'heroe/:id',component:HeroeComponent},
    {path:'buscador/:busqueda',component:BuscadorComponent},

    {path:'**',pathMatch:'full',redirectTo:'home'}

   


];

export const app_routing = RouterModule.forRoot(APP_ROUTES );
