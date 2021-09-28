const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

document.addEventListener("keydown", function(event) {
    evento = event || window.event;

    // Teclado numérico superior
    if (evento.keyCode > 47 && evento.keyCode < 58) {
        p = evento.keyCode - 48;
        p = String(p)

        document.getElementById(p).click();
    }

    // Teclado numérico lateral
    if (evento.keyCode > 95 && evento.keyCode < 106) {
        p = evento.keyCode - 96;
        p = String(p);

        document.getElementById(p).click();
    }

    // Punto, operadores e igualación
    if (event.key === ".") {
        document.getElementById('punto').click();
    }

    if (event.key === "*") {
        document.getElementById('mult').click();
    }

    if (event.key === "+") {
        document.getElementById('sum').click();
    }

    if (event.key === "-") {
        document.getElementById('rest').click();
    }
    
    if (event.key === "/") {
        document.getElementById('div').click();
    }

    if (event.key === " " || event.key === "Space" || event.key === "Enter") {
        document.getElementById('igual').click();
    }

    if (event.key === "Escape") {
        document.getElementById('supr').click();
    }

    if (event.key === "Delete" || event.key === "Backspace") {
        document.getElementById('retro').click();
    }
});
