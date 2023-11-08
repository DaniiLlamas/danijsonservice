import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {

  listaPrestada =[
    {
      "id": 1,
      "isbn": "8434469219",
      "titulo": "El señor de los anillos y la filosofía",
      "autores": "Gregory Bassham, Eric Bronson",
      "editorial": "Grupo Planeta (GBS)",
      "fecha": "2010-05-20",
      "descripcion": "¿Nos resultaría aburrida la vida eterna en caso de que pudiéramos alcanzarla? ¿Qué virtudes son necesarias para que el poder no corrompa a quien lo tiene? ¿Se revelará la naturaleza contra la tecnología? Si un ente cae en el bosque y nadie lo oye, ¿hace ruido? Gregory Bassham y Eric Bronson dan respuesta a éstas y otras cuestiones planteadas en El Señor de los Anillos, la epopeya de J. R. R. Tolkien que, desde su publicación, ha vendido más de cincuenta millones de ejemplares y cuya riqueza y complejidad ha tejido una red cada vez más amplia de seguidores. Si la intención de Tolkien era crear «una historia que mantendría la atención del lector [...] y que a veces quizá lo excitaría o lo conmovería profundamente», consiguió también trasladar a su obra algunas de sus propias inquietudes filosóficas: la lucha del bien contra el mal, la oposición entre destino y libre albedrío, la búsqueda de la felicidad o la vida después de la muerte. Esta colección de ensayos además de ofrecernos una comprensión más fiel de las cuestiones que inspiran y nutren El Señor de los Anillos, supone una amena introducción a la filosofía, la religión y la mitología y una excelente carta de presentación a la cosmovisión de pensadores como Platón, Aristóteles o Nietzsche. Porque, como dice el mago filósofo Gandalf: \"Si has estado estos días con las orejas tapadas y la mente dormida, ¡es hora de que despiertes!"
  },
  {
      "id": 2,
      "isbn": "6070712749",
      "titulo": "El Señor de Los Anillos 3.",
      "autores": "John Ronald Reuel Tolkien",
      "editorial": "Planeta Publishing",
      "fecha": "2012-11-13",
      "descripcion": "La última parte del viaje de Frodo y Sam Los ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino."
  }

    
  ]
  id:number = 2;
  constructor() { }

  public getAll(){
    return this.listaPrestada
  }

  public add(prestamo:any){
    this.id++
    prestamo.id = this.id
    this.listaPrestada.push(prestamo)
  }

  public delete(id:any){
    var obj;
    var indiceObj;
    for(let elemento of this.listaPrestada){
      if(elemento.id == id){
        obj=elemento;
        indiceObj = this.listaPrestada.indexOf(obj);
        this.listaPrestada.splice(indiceObj,1);
      }
    }
  }

  }


