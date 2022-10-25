// funciones
import {log} from "util";

/**
 * funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "jose"
    console.log(`Hola ${nombre}`)
}

saludar()

/**
 * muestra un mensaje a una persona
 * @param nombre Nombre de la persona en consola
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`)
}

const persoma = "jose"
saludarPersona("jose")

function despedirPersona(nombre: string) {
    console.log(`adio ${nombre}`)
}

despedirPersona('pepe')

function despedirPersonaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`adios ${nombre}`)
    } else {
        console.log('salu')
    }
}

despedirPersonaOpcional() //adios
despedirPersonaOpcional('mario') //adios mario

function variosParam(nombre: string, apellido?: string, edad: number = 18) {
    if (apellido) {
        console.log(`${apellido}-${nombre}-${edad}`)
    } else {
        console.log(`${nombre}-${edad}`)
    }

}


variosParam('martin') //martin tiene 18 años
variosParam('martin', 'ramirez') //martin ramirez tiene 18 años
//variosParam(nombre = "balmore", apellido = "mendez", edad = 23)
function ejemploVariosTipo(a: string | number) {
    if (typeof (a) === 'string') {
        console.log('a es un string')
    } else if (typeof (a) === 'number') {
        console.log('a es un number')
    } else {
        console.log(' a no es un string')
    }
}


ejemploVariosTipo('hola')
ejemploVariosTipo(2)

// funciones anonimas
/**
 *
 * @param nombre nombre de la persona
 * @param apellidos apellido de la perosna
 * @return nombre completo de la persona
 */
function ejemploRetunr(nombre: string, apellidos: string): string | number {
    return `${nombre} ${apellidos}`

}

const nombreCompleto = ejemploRetunr('jose', 'balmore')
console.log(nombreCompleto)


/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultiParam(...nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })

}

ejemploMultiParam('ariela')
ejemploMultiParam('jose', 'maria', 'martin', 'marta')

const lista = ['jose', 'alberto', 'lucia']
ejemploMultiParam(...lista)


function ejemploListaParam(nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })

}

ejemploListaParam(lista)


// arrow function


type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}
let empleadoMartin: Empleado = {
    nombre: 'jose',
    apellidos: 'lopez',
    edad: 20
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`

//llamar a la funcion
mostrarEmpleado(empleadoMartin)

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 20) {
        return `empleado ${empleado.nombre} esta en edad de jubilacion`
    } else {
        return `empleado ${empleado.nombre} esta en edad laboraral`
    }
}


datosEmpleado(empleadoMartin) //empleado martin esta en edad laboral


const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 20) {
        return
    } else {
        return cobrar() // callback ejecutar
    }
}


const cobrarEmpleado = (emmpleado: Empleado) => {
    console.log(`${emmpleado.nombre} cobra su salario`)
}

obtenerSalario(empleadoMartin, () => 'cobrar martin')

// async functions
async function ejemploAsync(): Promise<string> {
    // await
    await console.log('tarea a completar antes de guir con la secuencia de instruciones')
    console.log('tarea completada ')
    return 'completado'
}

ejemploAsync().then((respuesta) => {
    console.log('respuesta', respuesta)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('todo a terminado')
})

// funciones generators
function* ejemploGnerate() {
    // yield (ejecutar un funcion )
    let index = 0
    while (index < 5) {
        yield index++
    }
}

// guardamos la funcion en una variable

let generadora = ejemploGnerate()

// accedemos a los valores
console.log(generadora.next().value)  // accedemos al valor, 0
console.log(generadora.next().value)  // accedemos al valor, 1
console.log(generadora.next().value)  // accedemos al valor, 2

// worker

function* watcher(valor: number) {
    yield valor //emitimos el valor inicial
    yield* worker(valor)  // llamamos a las emisiones del worker para que imita otros calores
    yield valor + 4 //emitimos el valor final + 4
}

function* worker(valor: number) {
    yield valor + 1
    yield valor + 2
    yield valor + 3
}

let generatorSaga = watcher(0)
console.log(generatorSaga.next().value) //0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) //1(lo ha hecho el watcher)
console.log(generatorSaga.next().value) //2 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) //3 (lo ha hecho el watcher)