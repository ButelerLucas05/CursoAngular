import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';

const APP_ROUTES: Routes = [

    // nombre de la ruta, y que componente carga con esa ruta!
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}

];

export const app_routing = RouterModule.forRoot(APP_ROUTES );
