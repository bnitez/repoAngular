import { Component } from '@angular/core';
import { ProfesorOI } from './ProfesorOI';
import { ProfesorI } from './ProfesorI';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements ProfesorOI{
  profesor!: { nombres: string; apellidos: string; edad: number; direccion: string; };
  profesores!: Array<any|object>
  indice:number=0;

  constructor(){
    this.iniProfe();
    this.profesores=[
      {nombres:'Andres Enrrique',apellidos:'Suarez Verdulli',edad:46,direccion:'las palmas'},
      {nombres:'Paola Andrea',apellidos:'Perez',edad:35,direccion:'la castellana'},
      {nombres:'Carla Lisbeth',apellidos:'Muñoz Velez',edad:41,direccion:'el dorado'}
    ];
  }

  iniProfe(){
    this.profesor={
      nombres:"",
      apellidos:"",
      edad:0,
      direccion:""
    };
  }

  cantProfes(){
    return Object.entries(this.profesores).length;
  }

  seleccionProfesor(profe:ProfesorI, indice:number=0){
    this.profesor=profe;
    this.indice=indice;
  }

  borrarProfesor(indice:number){
    if(this.profesor.nombres === this.profesores[indice].nombres){
      this.iniProfe();
    }
    this.profesores.splice(indice,1);
  }

  registrarProfesor(){
    for(let x of this.profesores){
      if(x.nombres===this.profesor.nombres){
        alert("El profesor ya esta registrado");
        return;
      }
    }
    this.profesores.push({
      nombres:this.profesor.nombres,
      apellidos:this.profesor.apellidos,
      edad:this.profesor.edad,
      direccion:this.profesor.direccion,
    });
    this.iniProfe();
  }

  editarProfesor(){
    this.profesores[this.indice].nombres=this.profesor.nombres;
    this.profesores[this.indice].apellidos=this.profesor.apellidos;
    this.profesores[this.indice].edad=this.profesor.edad;
    this.profesores[this.indice].direccion=this.profesor.direccion;
  }
}
