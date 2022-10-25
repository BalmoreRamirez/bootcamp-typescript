class Persona {
    nombre: string
    apellido: string
    edad: number

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(): void {
        console.log(`${this.nombre} ${this.apellido} ${this.edad}`)
    }

}

export class Empleado extends Persona {
    sueldo: number

    constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo
    }

    saludar(): void {
        super.saludar()
        console.log(`mi sueldo es: ${this.sueldo}`)
    }
}

export class Jefe extends Persona {
    empleados: Empleado[] = []

    constructor(nombre: string, apellido: string, edad: number) {
        super(nombre, apellido, edad);
    }
}