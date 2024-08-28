
const inputTexto = document.querySelector(".entrada-texto"); //utilizamos los elementos de html aca en js por clase
const mensaje = document.querySelector(".msg-encriptado");   //utilizamos los elementos de html aca en js por clase
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"


//Encriptar mensaje
//Creamos la funcion que llamara a la funcion encriptar
function btnEncriptar() { 
    const textoEncriptado = encriptar(inputTexto.value)  //creamos una variable para recibir el resultado de la funcion encriptar tod esto unido a la constante inicial que unehtml con js
    mensaje.value = textoEncriptado            //ahora mandamos el texto recibido por la funcion hacia la caja de encriptado del mismo modo igualando  
    mensaje.style.backgroundImage="none"      //esta funcion nos dice que cuando damos clin en encriptat y aparesga el texto la imagen de fondo se eleminara 
    inputTexto.value = ""                      //del mismo modo esta linea nosdice que una vez escrito y mandado a encriptar lacajita se limpia 
    btnCopy.style.display = "block"

}
//Solucionaremos esto con una matriz, una matriz es un array dentro de otro array o lista dentro de otra lista
function encriptar(stringEncriptada) {                      //definimos la funcion con su parametro string.
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]; //definimos la matriz acorde a lo requerido
    stringEncriptada = stringEncriptada.toLowerCase();       //convertimos lo que se ingrese a letras minusculas con .toLowerCase() 

    for(let i=0; i < matrizCodigo.length; i++) {             //definimos un for para porder navegar en el array.length usando la i como indice
        if(stringEncriptada.includes(matrizCodigo[i][0])) {  // creamos un if dentro que define si el texto ingresado incluye un dato de la posicion 0 del array
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) //
        }                //en caso la condicion del if se cumpla reemplazara por la posicion uno de cada array //para eso usamos
    }                   //el metodo .replaceAll() que reemplaza todo en camnio .replace() solo remeplaza una vez.                
    return stringEncriptada;  //retornamos el texto ingresado por el usuario pero ya despues de ejecutarse el codigo

    
}


//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}
//funcion que desepcriptara el texto, tiene la misma sintaxis solo modifcaremos algunosp aramerosp ara que vayan alrevez
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]; //creamos la matriz
    stringDesencriptada = stringDesencriptada.toLowerCase();   //convertimos a minusculas 

    for(let i=0; i < matrizCodigo.length; i++) {  //creamos el indice de navegacion con i y .length
        if(stringDesencriptada.includes(matrizCodigo[i][1])) { //en este caso cambio,  condicionamos /le decimos en caso el texto ingresado incluya contenga texto de la pisicion 1 
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) // rreemplazara con replaceAll el texto ingresado y encriptado con la posicion 1 al de la posicion 0 
        }
    }

    return stringDesencriptada; //retornamos el texto desencriptado
}


//botón copiar
//creamos la funcion que nos ayudara a copiar el texto ya encrptado para desencriptarlo 
function copiar() {
    
    mensaje.select(); //usamos -select para selecionar todo lo que esta dentro del mensaje 
    navigator.clipboard.writeText(mensaje.value)  //
    mensaje.value = ""; //luego de copiar limpia el texto.
    
}




 