export class Curso{
  curso : string[]
  respuesta : string

  constructor(){
    this.curso = ['Java1','Java2','Oracle','Php1','Php2','JavaScript','TypeScript']
    this.respuesta = ""
  }

  getCourses():string[]{
    return this.curso
  }

  inscribir(nombre:string,edad:string,curso:string, direccion:string){
    this.respuesta = "Se ha inscrito al curso: "+ curso + ", Estudiante: " +nombre + ", edad: " + edad + ", direccion: " + direccion
  }



}
