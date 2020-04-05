import { ListaItem } from './lista-item.model';


// Clase para la agrupacion de tareas   

export class Lista{

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    completada:boolean;
    items:ListaItem[];


    constructor(titulo:string ){

        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];

        // asigna ID con el TImeStamp
        this.id = new Date().getTime();


    }

}