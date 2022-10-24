console.log('hello mundo')

// variables

var nombre: string = "jose"
let correo: string = "jose@gmail.com" //variable local
const PI: number = 3.141592
let apellido: any = "maria" //Para cambiar el calor. pero no se recomienda a hacerlo
var error: boolean = true


console.log("mi nombre " + nombre)
console.log(`mi correo  ${correo}`)

// Declaracion multiple
let a: string, b: boolean, c: number

a = "jose"
b = false
c = 8

let tarea: string[] = ["tarea", "hola"]
let valores: (string | number | boolean)[] = ["jose", 74, false]


enum Estados {
    "completo" = "c",
    "incompleto" = "i",
    "pendiente" = "p"
}

let estadoTarea: Estados = Estados.completo


// Interface
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

let tarea1: Tarea = {
    nombre: "tarea 1",
    estado: Estados.pendiente,
    urgencia: 10
}


// Types de typescript, defino los tipos de datos más estrictos
type Prodcuto = {
    precio: number,
    nombre: string
}
// asignacion multiple de variable

let mitarea = {
    titulo: "si",
    estado: Estados.completo,
    urgencia: 1
}
// declaracion 1 a 1
let miTitulo = mitarea.titulo
let miEstado = mitarea.estado
let miuRGENCIA = mitarea.urgencia

// declaracion con factor de propagacion
let {titulo, estado, urgencia} = mitarea


// en listas
let listaCompra: string[] = ["cafe", "leche", "pan"]
let listaCompraLunes: string[] = [...listaCompra, "dulce", "miel"]
let lsitacompraseman = [...listaCompraLunes, ...listaCompra]

// en onjetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "hjajus"
}
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

let coche: Prodcuto = {
    nombre: "jose",
    precio: 5000
}

//condicionales
if (error) {
    console.log("Hay un error")
} else {
    console.log("noa hy un error ")
}
//switch

switch (tarea1.estado) {
    case Estados.completo:
        break
    case Estados.incompleto:
        break
    case Estados.pendiente:
        break
    default:
        break
}

// bucles-
let listaTaraNueva: Tarea[] = [
    {
        nombre: "hacer pan",
        estado: Estados.completo,
        urgencia: 2
    },
    {
        nombre: "hacer desayuno",
        estado: Estados.incompleto,
        urgencia: 2
    },
    {
        nombre: "hacer cafe",
        estado: Estados.pendiente,
        urgencia: 2
    }
]

// for clasico
for (let index = 0; index < listaTaraNueva.length; index++) {
    const tarea = listaTaraNueva[index]
    console.log(`${index}-${tarea.nombre}`)
}


// foreach
listaTaraNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index}-${tarea.nombre}`)
    }
)

//for, forin, forEach

// bucles while- mientras la condicion sea verdad
while (tarea1.estado !== Estados.completo) {
    tarea1.urgencia++;
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.completo
        break
    } else {
        tarea1.urgencia++
    }
}

// do while se ejecuta solo una vez
do {
    tarea1.urgencia++
    tarea1.estado = Estados.completo
} while (tarea1.estado !== Estados.completo)