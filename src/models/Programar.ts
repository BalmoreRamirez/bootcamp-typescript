import {iTarea, Nivel} from "./interfaces/iTarea";

export class Programar implements iTarea {
    titulo: string;
    descripcion: string;
    completado: boolean;
    urgencia: Nivel;

    resumen(): string {
        return `Tarea de programacion: ${this.titulo} - ${this.completado}`;
    }

    constructor(titulo: string, descripcion: string, completado: boolean, urgencia: Nivel) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado
        this.urgencia = urgencia
    }

}