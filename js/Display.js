class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);

        if (this.valorActual == '') {
          this.valorActual = '0';
        }

        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '0';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';

        if (parseFloat(this.valorAnterior) == '0.' || this.valorAnterior === '') {
          this.valorAnterior = '0';
        }

        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.'  && this.valorActual.includes('.')) {
          return
        } else if (numero === '.' && !this.valorActual.includes('.') && (this.valorActual == '0' || this.valorActual == '')) {
          numero = '0.'
        }

        if(this.valorActual === '0') {
          if (numero === '0') {
            return
          }

          this.valorActual = '';
        }

        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.valorAnterior = this.valorAnterior.toString().substring(0, 18);
        this.valorActual = this.valorActual.toString().substring(0, 10);

        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        if (this.tipoOperacion === 'dividir') {
          if (this.valorAnterior == '0' || this.valorActual == '0') {
            this.valorActual = 'No dividir entre 0';
            return
          }
        }

        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
