// sobre carga de funciones


import {deleteAllCookies, deleteCookie, getCookieValue, setCookie} from "cookies-utils";

function mostrarError(error: string): void {
    console.log("hay un error", error)
}

// podemos almacenar muchos datos
// eventos y persistencia de datos en el navegador

// 1 - LocalStorage -> alamacena los datos en el navegador (no se eliminnan automaticamente)
// 2 - SessionStorage -> la diderencia radica en la session de navegador es decir los datos se persiste en la sesion
// en la session del navegador
// 3 - Cookie -> tiene una fecha de caducidad  y tambien tiene un ambito de url

// LocalStorage

// function guardarEnLocalStorage():void{
//     localStorage.set('nombre')
// }

// Cookie

const cookieOptions = {
    name: "usuario", // string,
    value: "Martin", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string
};

// setemao la cookie
setCookie(cookieOptions);

// ller una cookie
let cookieleida = getCookieValue('usuario')
// eliminar
deleteCookie("usuario")

// eliminar todas las cookies
deleteAllCookies()


// clase temporizador

class Temporizador {
    public terminar?: (tiempo: number) => void

    public empezar(): void {
        setTimeout(() => {

            // comporbar que existe la funcion terminar como callback
            if (!this.terminar) return

            // cuando hay pasado el tiempo se ejecutará la funcion terminar
            this.terminar(Date.now())
        }, 1000)
    }
}


const miTemporizador: Temporizador = new Temporizador()

// definemos la funcion del callback  ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
    console.log('evento terminado es : ', tiempo)
}

// lanzamos el temporizador
miTemporizador.empezar() // se inicia el timeout y cuando termine se ejecuta la funcion terminar()

setInterval(() => console.log('Tic'), 1000)

// eliminar la ejecucion de la funcion
delete miTemporizador.terminar;





