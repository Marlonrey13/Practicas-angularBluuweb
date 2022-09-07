import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { EquipoService } from './equipo.service';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { RutasComponent } from './rutas/rutas.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'rutas', component: RutasComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    RutasComponent,
    InicioComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
