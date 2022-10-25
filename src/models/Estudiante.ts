import {Curso} from "./Curso";

export class Estudiante {

    // propiedades publicas o privadas
    nombre: string
    apellidos?: string //opcional
    cursos: Curso[]

    private ID: string = 'juua78'

    // constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        // iniciamos las propiedades
        this.nombre = nombre
        if (apellidos) {
            this.apellidos = apellidos
        }
        this.cursos = cursos
    }

    get horasEstudiadas(): number {
        let horasEstudiadas = 0
        this.cursos.forEach((curso: Curso) => {
            horasEstudiadas += curso.horas
        })
        return horasEstudiadas
    }

    set ID_estudiante(id: string) {
        this.ID = id
    }

}