import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importamos el modulo de rutas

import { RouterModule } from '@angular/router';

// Importacion de paquete para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes , {useHash:true}),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
