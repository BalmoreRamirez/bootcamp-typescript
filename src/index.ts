import {CONNREFUSED} from "dns";
import {Estudiante} from "./models/Estudiante";
import {Curso} from "./models/Curso";
import {LISTA_CURSOS} from "./mock/cursos.mock";


// creamos un curso

// const cursoTS = new Curso('Ts', 15)
// const cursoJS = new Curso('JS', 20)

// const listaCurso: Curso[] = []
// listaCurso.push(cursoTS, cursoJS) // lista de cursos
const listaCurso: Curso[] = LISTA_CURSOS

// creamos estudiante
const martin: Estudiante = new Estudiante('jose', listaCurso, 'ramirez')

console.log(`${martin.nombre} estudia`)
// itermos por cada uno de ellos
martin.cursos.forEach((curso: Curso) => {
    console.log(`${curso.nombre} ${curso.horas}`)  // typescript 15 horas
})

const cursoAngular: Curso = new Curso('angular', 40)
martin.cursos.push(cursoAngular)

// conocer horas estudiadas
martin.horasEstudiadas // number

martin.ID_estudiante
// saber la instancia de un objeto/variable
// typeof
// instanceOf

