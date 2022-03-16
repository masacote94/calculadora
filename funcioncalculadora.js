var memory = 0;
var resultado = document.getElementById("resultado");
memory = document.getElementById("resultadoMemoria");

var valorUno = 0;
var valorDos = 0;
var choriFrito;
var porsenta;
var decim;
var eror;


function memoria() {
    resultado.textContent = memory.textContent;
}

function memoriaMas() {
    memory.textContent = parseInt(memory) + parseInt(resultado.textContent);
}

function memoriaMenos() {
    memory.textContent = parseInt(memory.textContent) - parseInt(resultado.textContent);
}

function uno() {
    resultado.textContent = resultado.textContent + "1";
}

function dos() {
    resultado.textContent = resultado.textContent + "2";
}

function tres() {
    resultado.textContent = resultado.textContent + "3";
}

function cuatro() {
    resultado.textContent = resultado.textContent + "4";
}

function cinco() {
    resultado.textContent = resultado.textContent + "5";
}

function seis() {
    resultado.textContent = resultado.textContent + "6";
}

function siete() {
    resultado.textContent = resultado.textContent + "7";
}

function ocho() {
    resultado.textContent = resultado.textContent + "8";
}

function nueve() {
    resultado.textContent = resultado.textContent + "9";
}

function cero() {
    resultado.textContent = resultado.textContent + "0";
}

function punto() {
    resultado.textContent = resultado.textContent + ".";
}

function reset() {
    resultado.textContent = "";
    valorUno = 0;
    valorDos = 0;
    chorifrito = "";

}

function reset2() {
    resultado.textContent = "";
}

function raiz() {
    valorUno = resultado.textContent;
    choriFrito = "5"
    resultado.textContent = ""


}

function suma() {
    valorUno = resultado.textContent;
    choriFrito = "1";
    resultado.textContent = "";

}

function resta() {
    valorUno = resultado.textContent;
    choriFrito = "2";
    resultado.textContent = "";
}

function multiplicacion() {
    valorUno = resultado.textContent;
    choriFrito = "3";
    resultado.textContent = "";
}

function divicion() {
    valorUno = resultado.textContent;
    choriFrito = "4";
    resultado.textContent = "";
}

function porsentaje() {
    valorDos = resultado.textContent;
    if (choriFrito == "3") {
        porsenta = parseInt(valorDos) * 100;
        decim = parseInt(porsenta) / parseInt(valorUno);
        resultado.textContent = decim.toFixed(2)
        if (decim > 99999) {
            resultado.textContent = "error"
        }
    }
}

function igual() {
    valorDos = resultado.textContent;
    if (choriFrito == "1") {
        eror = parseInt(valorUno) + parseInt(valorDos);
        resultado.textContent = eror.toFixed(2)
        if (eror > 99999) {
            resultado.textContent = "error"
        }
    }

    if (choriFrito == "2") {
        resultado.textContent = parseInt(valorUno) - parseInt(valorDos);
    }
    if (choriFrito == "3") {
        resultado.textContent = parseInt(valorUno) * parseInt(valorDos);
    }
    if (choriFrito == "4") {
        resultado.textContent = parseInt(valorUno) / parseInt(valorDos);
    }
    if (chorifrito == "5") {
        resultado.textContent = parseInt(valorUno) / parseInt(valorDos);

    }
}