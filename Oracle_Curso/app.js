
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarTexto() {
    document.querySelector('#textoUsuario').value = '';
}

function setDisable(nombreElemento){
    document.getElementById(nombreElemento).style.display = "none";
}

function encriptarTexto() {

    let textoUsuario = document.getElementById('textoUsuario').value;

    let textoEncriptado = textoUsuario.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");
    
    asignarTextoElemento('#resultado_texto', textoEncriptado);

    /*document.getElementById("texto_disclaimer").style.display = "none";*/

    setDisable("texto_disclaimer");
    setDisable("imagenBuscandoLupa");

    limpiarTexto();

}


function desencriptarTexto() {

    let textoEncriptado = document.getElementById('resultado_texto').textContent;

    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
            
    asignarTextoElemento('#resultado_texto', textoDesencriptado);

    console.log(textoDesencriptado);
}



/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/