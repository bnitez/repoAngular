import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ProfesorComponent } from './profesor/profesor.component';
import { NotasComponent } from './notas/notas.component';
import { CounterComponent } from './contador/counter/counter.component';
import { AddComponent } from './contador/counter/add/add.component';
import { MinComponent } from './contador/counter/min/min.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    ProfesorComponent,
    NotasComponent,
    CounterComponent,
    AddComponent,
    MinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
