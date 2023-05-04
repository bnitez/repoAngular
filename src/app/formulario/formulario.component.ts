import { Component,ViewChild,ElementRef } from '@angular/core';
import { Curso } from './Curso';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  listaCursos : string[]
  miCurso  = new Curso();
  respuesta : string

  @ViewChild('nombre', {static: false}) nombre!: ElementRef;
  @ViewChild('edad', {static: false}) edad!: ElementRef;
  @ViewChild('direccion', {static: false}) direccion!: ElementRef;
  @ViewChild('eleccion', {static: false}) eleccion!: ElementRef;


  constructor(){
    this.listaCursos = this.miCurso.getCourses();
    this.respuesta = "";
  }

  getInscribir(nombre:string, edad:string, curso:string, direccion:string){
    this.miCurso.inscribir(nombre,edad,curso,direccion)
    this.respuesta = this.miCurso.respuesta
  }

  borrarDatos(){
    this.respuesta = ""
    this.nombre.nativeElement.value = ""
    this.edad.nativeElement.value = ""
    this.direccion.nativeElement.value = ""
    this.eleccion.nativeElement.value = ""

  }

}
