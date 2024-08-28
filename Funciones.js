function encriptar() {
    let texto= document.getElementById("texto").value;
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("imagen");

    let textoCifrado = texto
    .replace(/a/gi, "lal")
    .replace(/e/gi, "xex")
    .replace(/i/gi, "nin")
    .replace(/o/gi, "som") 
    .replace(/u/gi, "pur");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto satisfactoriamente encriptado";
      parrafo.textContent = "";
      imagenes.src="./imagenes/ilustracion.jpg";
    } else {
        imagenes.src="./imagenes/ups-error-404.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto para encriptar o desencriptar";
        alert ("Introduce linea de texto")
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("imagen");

    let textoCifrado = texto
    .replace(/lal/gi, "a")
    .replace(/xex/gi, "e")
    .replace(/nin/gi, "i")
    .replace(/som/gi, "o") 
    .replace(/pur/gi, "u");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagenes.src="./imganes/ilustracion.jpg";
    }else {
        imagenes.src="./imagenes/ups-error-404.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresar texto para encriptar o desencriptar";
        alert("Debes ingresar linea de texto");
    } 
}