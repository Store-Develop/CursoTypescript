let saludo = 'HolaMundo desde TypeScript';

saludo = 'Cambio';

let numero:number;
numero = 10;

let cualquiera:any;
cualquiera = 'Cadena';
cualquiera = 10;

const NUMERO_PI = 3.14;

function saludar(){
    console.log(saludo);
    console.log(numero);
    console.log(NUMERO_PI);
}

saludar();