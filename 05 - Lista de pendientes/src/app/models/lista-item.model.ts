// Clase para diagramar las listas de tareas

export class ListaItem{

    desc:string;
    completado:boolean;

    constructor(desc:string){

        this.desc = desc;
        this.completado = false;
    }

}