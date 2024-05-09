function hola (nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback();
    },2000);
}

function adios (nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    },2000)
}

console.log('Iniciando proceso...')
hola('Carlos', function () {
    adios('Carlos', function() {
        console.log('Terminando proceso...')
    })
});
