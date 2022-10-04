class Ejercicios {

    divisores() {
        let dato1 = document.getElementById("data-1").value
        let resp = document.getElementById("resultado")
        if(dato1 != "") {
            if(isNaN(dato1)==false) {
                resp.textContent = "Los divisores de su numero son: "
                for(let i=0; i<dato1-1; i++){
                 if(dato1 % i == 0){
                    if(i==1){
                        resp.textContent+=i
                    }else{
                        resp.textContent+=", "+ i
                    }
                 }
                }
            }else{
                alert("ERROR. Por favor, ingrese datos numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    invertirNumeros() {
        let res = 0
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado");
        if(dato1 != "") {
            if(isNaN(dato1)==false){
                resultado.textContent = "Su numero a la inversa es: "
                while(dato1>0) {
                 res = dato1 % 10
                 resultado.textContent += res
                 dato1 = Math.trunc(dato1/10)
                }
            }else{
                alert("ERROR. Por favor, ingrese datos numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    primo() {
        let ingreso = document.getElementById("data-1").value
        let res = document.getElementById("resultado")
        let acum=0
        if(ingreso != "") {
            if(isNaN(ingreso) == false) {
                ingreso = parseFloat(ingreso)
                for(let i=1; i<=ingreso; i++){
                    if(ingreso%i==0)acum = acum + 1;
                }
                if(conpri== 2) {
                    res.textContent=`El numero ${ingreso.toString()} si es un numero primo`
                }else{
                    res.textContent= `El numero ${ingreso.toString()} que usted ha ingresado no es un numero primo`
                }
            }else{
                alert("ERROR. ingrese un valor numerico")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    perfecto() {
        let perfecto = document.getElementById("data-1").value
        let resp = document.getElementById("resultado")
        if(perfecto != "") {
            if(isNaN(perfecto) == false) {
                perfecto = parseFloat(perfecto)
                let ac = 0,  i = perfecto - 1, r = 0;
                while (i > 0) {
                    r = perfecto % i
                    if (r == 0)ac = ac + i;
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
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    fibonacci() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado");
        if(dato1 != "") {
            if(isNaN(dato1) == false) {
                dato1 = parseInt(dato1);
                resultado.textContent = `La serie fibonacci con limite de ${dato1} es: \n`;
                let valor1= 0, valor2 = 1, temporal = 0;
                for(let i = 0;i < dato1;i++) {
                    temporal = valor1;
                    valor1 = valor2;
                    valor2 = temporal + valor2;
                    resultado.textContent += `${valor1} \n`
                }
            } else {
                alert("ERROR. ingrese un valor numerico")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    base10a2() {
        let dato1 = document.getElementById("data-1").value
        let respuesta = document.getElementById("resultado")
        let array = []
        let con=0
        if(dato1 != "") {
            if(isNaN(dato1)==false) {
                while(dato1>0) {
                  array[con] = dato1 % 2
                  con = con+1
                  dato1 = Math.trunc(dato1/2)
                }
                respuesta.textContent = `El numero ${dato1} en binario es: `
                for(let i=con-1; i>=0; i--){
                    let ver = array[i]
                    respuesta.textContent += ver
                }
            }else{
                alert("Error. Por favor, ingrese valores que sean numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    base10a16() {
        let dato1 = document.getElementById("data-1").value;
        let num = dato1;
        let resultado = document.getElementById("resultado");
        let letras = ["A","B","C","D","E","F"];
        let base = 16, reciduo = 0, digito = 0, base16 = "";
        while(dato1 > 0) {
            reciduo = dato1 % base;
            if(reciduo > 9) {
                digito = letras[reciduo - 10]
            } else {
                digito = reciduo.toString();
            }
            base16 = digito + base16;
            dato1 = Math.trunc(dato1/ base);
        }
        resultado.textContent = `El numero ${num} hexadecimal es: ${base16}` 
    }

    base10a8() {
        let ingresado = document.getElementById("data-1").value;
        let numero = ingresado
        let resultado = document.getElementById("resultado")
        let respuesta=[]
        let con=0
        if(ingresado != "") {
            if(isNaN(ingresado)==false) {
                ingresado = parseInt(ingresado);
                while(ingresado > 0) {
                    respuesta[con] = ingresado % 8
                    ingresado = Math.trunc(ingresado/8)
                    con = con + 1
                }
                resultado.textContent = `Su numero ${numero} en base 10 es igual: `
                for(let i=con-1; i>=0; i--)resultado.textContent += respuesta[i];
                resultado.textContent+=" en base 8"
             } else {
                alert("ERROR. Usted solo ha ingresado valores alfanumérico, vuelva a intentarlo con numericos")
             }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
     }

    base2a10() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado");
        let num = dato1
        let validos = [];
        let decimal=0,i=0,resto = 0,longitud = 0, comprobar = true;
        if(dato1 != "") {
            if(isNaN(dato1)==false) {
                longitud = dato1.length
                for(let i = 0;i < longitud; i++){ 
                    validos[i] = dato1.substring(i,i+1)
                    if(validos[i] > 1) {
                        comprobar = false;
                        break;
                    }
                }
                if(comprobar) {
                    while (dato1 != 0) {
                        resto = dato1 % 10;
                        dato1 = parseInt(dato1/10);
                        decimal = decimal + resto * Math.pow(2, i);
                        ++i;
                    }
                    resultado.textContent = `El numero ${num} decimal es: ${decimal}` 
                } else {
                    alert("ERROR. Usted solo ha ingresado valores invalidos, vuelva a intentarlo con numericos")
                }
            }else{
                alert("ERROR. Usted solo ha ingresado valores alfanumérico, vuelva a intentarlo con numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    base2a16() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado");
        let num = dato1
        let validos = [];
        let decimal = 0, i = 0, resto = 0, longitud = 0,comprobar = true;
        if(dato1 != "") {
            if(isNaN(dato1)==false) {
                longitud = dato1.length
                for(let i = 0;i < longitud; i++){ 
                    validos[i] = dato1.substring(i,i+1)
                    if(validos[i] > 1) {
                        comprobar = false;
                        break;
                    }
                }
                if(comprobar) {
                    while (dato1 != 0) {
                        resto = dato1 % 10;
                        dato1 = parseInt(dato1/10);
                        decimal = decimal + resto * Math.pow(2, i);
                        ++i;
                    }
                    let letras = ["A","B","C","D","E","F"];
                    let base = 16, reciduo = 0, digito = 0, base16 = "";
                    while(decimal > 0) {
                        reciduo = decimal % base;
                        if(reciduo > 9) {
                            digito = letras[reciduo - 10]
                        } else {
                           digito = reciduo.toString();
                        }
                        base16 = digito + base16;
                        decimal = Math.trunc(decimal/ base);
                    }
                    resultado.textContent = `El numero ${num} hexadecimal es: ${base16}` 
                } else {
                    alert("ERROR. Usted solo ha ingresado valores invalidos, vuelva a intentarlo con numericos")
                }
            }else{
                alert("ERROR. Usted solo ha ingresado valores alfanumérico, vuelva a intentarlo con numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
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
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    polindroma() {
        let polindroma = document.getElementById("data-1").value;
        let resultado=document.getElementById("resultado")
        let dato1= ""
        let con=0, con2=0, con1=0
        let array=[]
        if(polindroma != "") {
            dato1 = polindroma.toUpperCase();
            if(isNaN(dato1) == true) {
                for( let i=0; i<dato1.length; i++) {
                    if(dato1.substring(i,i+1) != " ") {
                        array[con] = dato1.substring(i,i+1)
                        con1 = con1+1
                        con = con+1
                    }
                }
                con = con-1
                for(let i=0; i<con1; i++) { 
                  if(array[i]!=array[con])con2=con2+1;
                  con = con-1
                }
                if(con2==0){
                   resultado.textContent = `${polindroma} si es una polindroma.`
                }else{
                    resultado.textContent = `${polindroma} no es una polindroma.`
                }
            }else{
                alert("ERROR. Usted solo ha ingresado valores alfanumérico, vuelva a intentarlo con numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    invertirfrase() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado")
        let dat = []
        if(dato1 != "") {
            resultado.textContent = 'Su frase invertido es:\n'
            if(isNaN(dato1)==true){
                for(let i=0; i<dato1.length; i++)dat[i] = dato1.substring(i,i+1);
                for(let i=dato1.length-1; i>=0; i--)resultado.textContent += dat[i];
            }else{
                alert("ERROR. Usted solo ha ingresado valores numericos, vuelva a intentarlo con palabras")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    contarCaracteres() {
        let dato1 = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado")
        let caracteres = new Map();
        if(dato1 != "") {
            if(isNaN(dato1)==true) {
                resultado.textContent = `De "${dato1}" se ha contado lo siguiente:\n`
                for(let i = 0; i < dato1.length; i++) {
                    let caracter = dato1.substring(i,i+1);
                    if(!caracteres.has(caracter)) {
                        caracteres.set(caracter, 1);
                    } else {
                        caracteres.set(caracter, caracteres.get(caracter) + 1);
                    }
                }
                for(const [key, value] of caracteres)resultado.textContent += key.toString() + " = " + value.toString() + "\n";
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    buscarCadena() {
        let dato1 = document.getElementById("data-1").value;
        let dato2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado");
        if((dato1 != "") && (dato2 != "")) {
            if(dato1.includes(dato2)) {
                let posicion = 0, desde = 0;
                let buscar = dato2;
                do{ 
                    posicion = dato1.indexOf(buscar, desde);
                    desde = posicion + buscar.length
                } while (posicion>=0)
                resultado.textContent=`${dato2} se encuentra en la cadena posicion: ${desde}.`
            } else {
                resultado.textContent=`No se ha encontrado ${dato2} en la cadena.`
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    mayorDeArreglo() {
        let ingresado = document.getElementById("data-1").value;
        let resultado = document.getElementById("resultado")
        let con = 0
        let mayor = 0;
        if(ingresado != "") {
            ingresado = ingresado.split(";")
            for(let i=0; i< ingresado.length; i++){
                if(isNaN(ingresado[i])==true) {
                    con= con + 1
                }else{
                    ingresado[i] = parseFloat(ingresado[i])
                    if(ingresado[i] > mayor)mayor = ingresado[i];
                }
            }
            if(con==0){
                resultado.textContent = `Del arreglo el numero mayor es: ${mayor}`
            }else{
                alert("ERROR. Por favor, ingrese datos que sean numericos")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    promedioArreglo() {
        let ingresado = document.getElementById("data-1").value
        let res = document.getElementById("resultado")
        let con = 0, ignorar = 0;
        if(ingresado != "") {
            let guardar = ingresado.split(";")
            let lo = guardar.length
            for(let i=0; i<lo; i++) {
                if(!isNaN(guardar[i])) {
                    con = con + (parseFloat(guardar[i]))
                } else {
                    ignorar = ignorar + 1;
                }
            }
            if(con > 0) {
                lo = lo - ignorar;
                con = Math.floor(con / lo)
                res.textContent=`El promedio de el arreglo es de: ${con.toString()}`
            } else {
                alert("ERROR. Usted solo ha ingresado valores alfanumericos, vuelva a intentarlo con numeros")
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    buscarArreglo() {
        let dato1 = document.getElementById("data-1").value;
        let dato2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado")
        let checker = false;
        if((dato1 != "") && (dato2 != "")) {
            dato1 = dato1.split(";");
            for(let i = 0;i<dato1.length;i++) {
                if(dato1[i] == dato2) {
                    resultado.textContent = `Se ha encontrado el valor ${dato2} en la posicion ${i}`;
                    checker = true;
                    break
                }
            }
            if(!checker) {
                resultado.textContent = `No se ha encontrado el valor ${dato2}`;
                return;
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    eliminarArreglo() {
        let ingresado = document.getElementById("data-1").value;
        let ingresado2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado")
        let newArray = [];
        if((ingresado != "") && (ingresado2 != "")) {
            ingresado = ingresado.split(";")
            for(let i = 0; i<ingresado.length; i++) {
                if(ingresado[i] != ingresado2) {
                    newArray[i] = ingresado[i]
                }
            }
            resultado.textContent = "Array final: \n"
            for(let i=0; i<newArray.length; i++) {
                if(newArray[i] != null) {
                    resultado.textContent += `[${newArray[i]}] \n`;
                }
            }
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }

    insertaElemento() {
        let dato1 = document.getElementById("data-1").value;
        let dato2 = document.getElementById("data-2").value;
        let resultado = document.getElementById("resultado")
        let con = 0
        let array2=[]
        if((dato1 != "") && (dato2 != "")) {
            dato1 = dato1.split(";")
            dato2 = dato2.split("=");
            let posicion = dato2[0]
            let valor = dato2[1];
            for(let i = 0; i <= dato1.length; i++) {
                if(i != posicion) {
                    array2[i] = dato1[con]
                    con = con + 1
                } else {
                    array2[i] = valor
                }
            }
            resultado.textContent = "El arreglo queda: \n"
            for(let i= 0; i <= ingresado.length; i++)resultado.textContent += "["+array2[i]+ "] \n";
        } else {
            alert("ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer")
        }
    }
}

let instance = new Ejercicios();

function guardarOpcion(ejercicio) {
    localStorage.setItem("ejer-realizar", ejercicio);
    switch(ejercicio) {
        case "ejer-15":
            crearInputProp("Introduzca caracter a buscar.");
            break
        case "ejer-18":
            crearInputProp("Introduza el valor a busca");
            break
        case "ejer-19":
            crearInputProp("Introduzca el valor a borrar");
            break
        case "ejer-20":
            crearInputProp("Introduzca el valor a insertar posicion=valor");
            break
        default:
            calcular();
            break
    }
}

function calcular() {
    let ejercicio = localStorage.getItem("ejer-realizar");
    switch(ejercicio) {
        case "ejer-1":
            modificarEjerActual("Divisores");
            instance.divisores();
            break
        case "ejer-2":
            modificarEjerActual("Invertir numeros");
            instance.invertirNumeros();
            break    
        case "ejer-3":
            modificarEjerActual("Numero primo");
            instance.primo();
            break
        case "ejer-4":
            modificarEjerActual("Perfecto");
            instance.perfecto();
            break
        case "ejer-5":
            modificarEjerActual("Fibonacci");
            instance.fibonacci();
            break
        case "ejer-6":
            modificarEjerActual("Base 10 a base 2");
            instance.base10a2();
            break
        case "ejer-7":
            modificarEjerActual("Base 10 a base 16");
            instance.base10a16();
            break
        case "ejer-8":
            modificarEjerActual("Base 10 a base 8");
            instance.base10a8()
            break
        case "ejer-9":
            modificarEjerActual("Base 2 a base 10");
            instance.base2a10();
            break
        case "ejer-10":
            modificarEjerActual("Base 2 a base 16");
            instance.base2a16();
            break
        case "ejer-11":
            modificarEjerActual("Contar palabras")
            instance.contar_palabras();
            break
        case "ejer-12":
            modificarEjerActual("Palindroma")
            instance.polindroma();
            break
        case "ejer-13":
            modificarEjerActual("Invertir frase")
            instance.invertirfrase();
            break
        case "ejer-14":
            modificarEjerActual("Contar caracteres");
            instance.contarCaracteres();
            break    
        case "ejer-15":
            modificarEjerActual("Buscar cadena");
            instance.buscarCadena();
            cerrar(false);
            break
        case "ejer-16":
            modificarEjerActual("Mayor arreglo");
            instance.mayorDeArreglo();
            break
        case "ejer-17":
            modificarEjerActual("Promedio arreglo");
            instance.promedioArreglo();
            break
        case "ejer-18":
            modificarEjerActual("Buscar arreglo");
            instance.buscarArreglo();
            cerrar(false);
            break;
        case "ejer-19":
            modificarEjerActual("Eliminar elemento arreglo");
            instance.eliminarArreglo();
            cerrar(false);
            break
        case "ejer-20":
            modificarEjerActual("Insertar elemento arreglo");
            instance.insertaElemento();
            cerrar(false);
            break;
        default:
            alert("ERROR. No se puede calcular o realizar el ejercicios, faltan parametros que establecer")
            break
    }
}

function cerrar(verificar) {
    document.querySelector(".inputProp").classList.remove('activo');
    if(verificar) {
        document.getElementById("data-2").value = "";
        localStorage.removeItem("ejer-realizar");
        modificarEjerActual("N/A")
    }
}

function limpiar() {
    document.getElementById("data-1").value = "";
    document.getElementById("resultado").textContent = "El resultado se mostrará aquí...";
    cerrar(true);
}

function modificarEjerActual(dialogo) {
    document.getElementById("ejer-actual").innerHTML = "Ejercicio realizado: " + dialogo;
}

function crearInputProp(dialogo) {
    let inputProp = document.querySelector(".inputProp");
    document.getElementById("ejer-dialogo").innerHTML = dialogo;
    inputProp.classList.add('activo');
}

window.onkeydown = document.getElementById("data-2").addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        calcular();
        cerrar(false);
    }
});