import {Estudiante} from "./models/Estudiante";
import {Curso} from "./models/Curso";
import {LISTA_CURSOS} from "./mock/cursos.mock";
import {Empleado, Jefe} from "./models/Persona";
import {iTarea, Nivel} from "./models/interfaces/iTarea";
import {Programar} from "./models/Programar";


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


let fechanacimiento = new Date(1993, 10, 10)
if (fechanacimiento instanceof Date) {
    console.log(' es una instanacia de Date ')
}


if (martin instanceof Estudiante) {
    console.log('Martin es un estudiante')
}

// Herencia y polimorfismo
let empleado1 = new Empleado('martin', 'mendez', 34, 2900)
let empleado2 = new Empleado('Pepe', 'mendez', 34, 2030)
let empleado3 = new Empleado('Juan', 'mendez', 34, 2020)

empleado1.saludar() // herencia de persona

let jefe = new Jefe('pabo', 'garcia', 50)
jefe.empleados.push(empleado1, empleado2, empleado3)

jefe.empleados.forEach((empleado: Empleado) => {
    // acceso al empeado
    console.log(empleado.nombre)
    empleado.saludar() // espesificando en empleado
})

empleado1.saludar() // espesificado por empleado
jefe.saludar() // Herencia de persona


// uso de interfaces

let programar: iTarea = {
    titulo: "Programar con TS",
    descripcion: "para aprender a desarrollar con NODEJS",
    completado: false,
    urgencia: Nivel.Urgente,
    resumen(): string {
        return `${this.titulo} ${this.completado} Nivel: ${this.urgencia}`;
    },
}

console.log(programar.resumen)

// Tarea de programacion
let programarTs = new Programar('Ts', 'Tarea de programacion ', false, Nivel.Bloqueante)
console.log(programarTs.resumen())


// decoradores experimentales -->0

// - clases
// - parametros
// - metodos
// - propiedades

function Override(label: string) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class PruebaDecorador {
    @Override('Prueba') // llamar  ala funcion override
    nombre: string = 'jose'
}

let prueba = new PruebaDecorador()
console.log(prueba.nombre) // Prueba, siempre sera devuelto a traves de get


function sololectura(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebasSoloLectura {
    @sololectura
    nombre: string = '' // NOMBRE NO podria ser, sobre escrito
}

let pruebaLectura = new PruebasSoloLectura()
pruebaLectura.nombre = 'jose'

console.log(pruebaLectura.nombre) // ==> undefine ya que no e puede dar valor


// decolador para parametro de un metodo
function mostrarPosicion(target: any, propertykey: string, parameterIndez: number) {
    console.log('posicion', parameterIndez)
}

class PruebaMetodoDecorador {
    prueba(a: string, @mostrarPosicion b: boolean) {
        console.log(b)
    }

}

// usamos el metodo con el parameto y su decorador
new PruebaMetodoDecorador().prueba('Hola', false)





