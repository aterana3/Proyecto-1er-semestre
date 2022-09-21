class Ejercicios {
    divisores() {

    }

    buscarArreglo() {
        let dato1 = document.getElementById("data-1").value;
        let dato2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado");
        if(!(dato2 == "" || dato2 == null)) {
            dato1 = dato1.split(",");
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
            alert("Error no se puede calcular o realizar el ejercicios, faltan parametros que establecer")
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
        case "ejer-18":
            instance.buscarArreglo();
            break;
        default:
            alert("Error no se puede calcular o realizar el ejercicios, faltan parametros que establecer")
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