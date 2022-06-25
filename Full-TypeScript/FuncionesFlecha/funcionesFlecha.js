"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
//let sumaFlecha = (a:number, b:number) => a + b;
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(4, 6));
let obtenerNombre = function () {
    return 'Juan Pérez';
};
console.log(obtenerNombre());
let obtenerNombreFlecha = () => 'Juan Pérez Flecha';
console.log(obtenerNombreFlecha());
