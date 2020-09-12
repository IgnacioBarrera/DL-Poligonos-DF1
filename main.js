/* VARIABLES PARA INTERACTUAR CON CLIENTE */
let calcularR = document.getElementById('calcularR');
let calcularTR = document.getElementById('calcularTR');
let resultadoR = document.getElementById('resultadoR');
let resultadoTR = document.getElementById('resultadoTR');
    /* FUNCION RECTANGULO */
calcularR.addEventListener('click', function () {
    // VARIABLES
    let operaR = document.getElementById('operaR').value;
    let r1 = document.getElementById('r1').value;
    let r2 = document.getElementById('r2').value;
            /* RECTANGULO */
    //  CLASE CON ATRIBUTOS
    function Rectangulo(largo, ancho) {
        this._largo = function () { 
            return largo;
        }
        this._ancho = function () {
            return ancho;
        }
    }
    // GET Y SET
        /* GET */
    Rectangulo.prototype.getLargo = function () {
        return this._largo();
    }
    Rectangulo.prototype.getAncho = function () {
        return this._ancho();
    }
        /* SET */
    Rectangulo.prototype.setLargo = function (nuevo_largo) {
        this._largo = function () {
            return nuevo_largo;
        }
    }
    Rectangulo.prototype.setAncho = function (nuevo_ancho) {
        this._ancho = function () {
            return nuevo_ancho;
        }
    }
    //  METODOS PARA LA CLASE
            // AREA
    Rectangulo.prototype.calcularArea = function () {  
        return (this._largo()*this._ancho());
    }
            // PERIMETRO
    Rectangulo.prototype.calcularPerimetro = function() {
        return ((2*this._largo()) + (2*this._ancho()));
    }
            // INSTANCIA OBJETOS VALORES DEFAULT
    let rectval = new Rectangulo(10,5);

    if (operaR == 'area') {
        console.log('Area RECTANGULO.');
        console.log('Largo default: ', rectval.getLargo());
        console.log('Ancho default: ', rectval.getAncho());
        // EL USUARIO INGRESA LOS VALORES
        rectval.setLargo(r1);
        rectval.setAncho(r2);
        // OCUPA LOS VALORES INGRESADOS POR USUARIO
        console.log('Largo definido por usuario: ', parseFloat(r1));
        console.log('Ancho definido por usuario: ', parseFloat(r2));
        // ENTREGA VALOR PEDIDO Y LO IMPRIME EN HTML
        console.log('El valor del área es de: ', rectval.calcularArea());
        resultadoR.innerHTML = rectval.calcularArea();
    } else if (operaR == 'perimetro') {
        console.log('Perimetro RECTANGULO.');
        console.log('Largo default: ', rectval.getLargo());
        console.log('Ancho default: ', rectval.getAncho());
        // EL USUARIO INGRESA LOS VALORES
        rectval.setLargo(r1);
        rectval.setAncho(r2);
        // OCUPA LOS VALORES INGRESADOS POR USUARIO
        console.log('Largo definido por usuario: ', parseFloat(r1));
        console.log('Ancho definido por usuario: ', parseFloat(r2));
        // ENTREGA VALOR PEDIDO Y LO IMPRIME EN HTML
        console.log('El valor del perímetro es de: ', rectval.calcularPerimetro());
        resultadoR.innerHTML = rectval.calcularPerimetro();
    } else {
        alert('Ingrese una operacion válida (area o perimetro).')
    }
});

    /* FUNCION TRIANGULO RECTANGULO */
calcularTR.addEventListener('click', function () {
    // VARIABLES
    let operaTR = document.getElementById('operaTR').value;
    let tr1 = document.getElementById('tr1').value;
    let tr2 = document.getElementById('tr2').value;
                /* TRIANGULO RECTANGULO */
    //  CLASE CON ATRIBUTOS
    function Triangulorectangulo(base, altura) {
        this._base = function () {
            return base;
        } 
        this._altura = function () {
            return altura;
        }
    }
    // GET Y SET
        /* GET */
    Triangulorectangulo.prototype.getBase = function () {
        return this._base();
    }
    Triangulorectangulo.prototype.getAltura = function () {
        return this._altura();
    }
        /* SET */
        Triangulorectangulo.prototype.setBase = function (nueva_base) {
        this._base = function () {
            return nueva_base;
        }
    }
    Triangulorectangulo.prototype.setAltura = function (nueva_altura) {
        this._altura = function () {
            return nueva_altura;
        }
    }
    //  METODOS PARA LA CLASE
            // AREA
    Triangulorectangulo.prototype.calcularArea = function () {  
        return ((this._base()*this._altura())/2);
    }
            // HIPOTENUSA
    Triangulorectangulo.prototype.calcularHipotenusa = function () {
        return (Math.sqrt(Math.pow(this._base(), 2)+Math.pow(this._altura(), 2)))
    }
            // PERIMETRO
    Triangulorectangulo.prototype.calcularPerimetro = function() {
        return (parseFloat(trval.calcularHipotenusa())+parseFloat(this._base())+parseFloat(this._altura()));
    }
            // INSTANCIA OBJETOS
    let trval = new Triangulorectangulo(3,5);
    if (operaTR == 'area') {
        console.log('Area TRIANGULO-RECTANGULO.');
        console.log('Base default: ', trval.getBase());
        console.log('Altura default: ', trval.getAltura());
        // EL USUARIO INGRESA LOS VALORES
        trval.setBase(tr1);
        trval.setAltura(tr2);
        // OCUPA LOS VALORES INGRESADOS POR USUARIO
        console.log('Base definido por usuario: ', parseFloat(tr1));
        console.log('Altura definido por usuario: ', parseFloat(tr2));
        // ENTREGA VALOR PEDIDO Y LO IMPRIME EN HTML
        console.log('El valor del área es de: ', trval.calcularArea());
        resultadoTR.innerHTML = trval.calcularArea();
    } else if (operaTR == 'perimetro') {
        console.log('Perimetro TRIANGULO-RECTANGULO.');
        console.log('Base default: ', trval.getBase());
        console.log('Altura default: ', trval.getAltura());
        // EL USUARIO INGRESA LOS VALORES
        trval.setBase(tr1);
        trval.setAltura(tr2);
        // OCUPA LOS VALORES INGRESADOS POR USUARIO
        console.log('Base definido por usuario: ', parseFloat(tr1));
        console.log('Altura definido por usuario: ', parseFloat(tr2));
        // ENTREGA VALOR PEDIDO Y LO IMPRIME EN HTML
        console.log('El valor del perímetro es de: ', trval.calcularPerimetro());
        resultadoTR.innerHTML = trval.calcularPerimetro();
    } else {
        alert('Ingrese una operacion válida (area o perimetro).')
    }
});