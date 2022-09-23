class Ejercicios {

    divisores() {
        
    }

    perfecto() {
        let perfecto = document.getElementById("data-1").value
        let resp = document.getElementById("resultado")
        if((perfecto != "")) {
            if(!isNaN(perfecto)) {
                perfecto = parseFloat(perfecto)
                let ac = 0,  i = perfecto - 1, r = 0;
                while (i > 0) {
                    r = perfecto % i
                    if (r == 0) {
                        ac = ac + i
                    }
                    i = i - 1;
                }
                if (perfecto == ac) {
                    resp.textContent = "El número es perfecto."
                } else {
                    resp.textContent = "El número no es perfecto."
                }
            } else {
                alert("ERROR. Usted esta ingresado valores alfanumérico, vuelva a intentarlo con números")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicios, faltan parametros que establecer")
        }
    }

    contar_palabras() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado");
        let contador = 0;
        if(dato1 != "") {
            if(isNaN(dato1)==true) {
                let palabras = dato1.split(" ");
                for(let i = 0;i<palabras.length;i++) {
                    if(palabras[i] != "")contador = contador + 1;
                }
                resultado.textContent=`La cantidad de palabras que usted ha ingresado es de: ${contador}`
            }else{
                alert("ERROR. Usted solo ha ingresado valores numericos, vuelva a intentarlo con palabras")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicios, faltan parametros que establecer")
        }
    }

    buscarArreglo() {
        let dato1 = document.getElementById("data-1").value;
        let dato2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado");
        if(!(dato2 == "" || dato2 == null)) {
            dato1 = dato1.split(";");
            resultado.textContent = "";
            for(let i = 0;i<dato1.length;i++) {
                if(dato1[i] == dato2) {
                    resultado.textContent = `Se ha encontrado el valor ${dato2} en la posicion ${i}`;
                    break
                } else if(dato1[i] != dato2 && i == (dato1.length-1)) {
                    resultado.textContent = "No se ha encontrado ningun valor."
                    break
                }
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicios, faltan parametros que establecer")
        }
    }
}

let instance = new Ejercicios();

function guardarOpcion(ejercicio) {
    let databox = document.querySelector(".data-box-2");
    localStorage.setItem("ejer-realizar", ejercicio);
    switch(ejercicio) {
        case "ejer-15":
        case "ejer-18":
        case "ejer-19":
        case "ejer-20":
            databox.classList.add('activo');
            break
        default:
            databox.classList.remove('activo');
            break
    }
}

function calcular() {
    let ejercicio = localStorage.getItem("ejer-realizar");
    switch(ejercicio) {
        case "ejer-1":
            instance.divisores();
            break;
        case "ejer-4":
            instance.perfecto();
            break
        case "ejer-11":
            instance.contar_palabras();
            break
        case "ejer-18":
            instance.buscarArreglo();
            break;
        default:
            alert("ERROR. No se puede calcular o realizar el ejercicios, faltan parametros que establecer")
            break
    }
}

function limpiar() {
    let dato1 = document.getElementById("data-1");
    let dato2 = document.getElementById("data-2");
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El resultado se mostrará aquí..."
    dato1.value = ""
    dato2.value = ""
    dato2.classList.remove('activo');
    localStorage.removeItem("ejer-realizar");
}