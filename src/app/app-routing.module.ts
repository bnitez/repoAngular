import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NotasComponent } from './notas/notas.component';
import { CounterComponent } from './contador/counter/counter.component';

const routes: Routes = [
  {
    path: 'profesores',
    component: ProfesorComponent
  },
  {
    path: 'cursos',
    component: FormularioComponent
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'contador',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
