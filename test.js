// importar la funcion sum del archivo app.js

const {sum} = require ('./app.js');

// comienza tu primera prueba

// Comienza tu primera prueba
test('adds 15 + 24 to equal 39', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(15, 24);
     // Esperamos que la suma de esos 2 números sea 39
     expect(total).toBe(39);
});

// FUNCION DE FROMEUROTODOLLAR
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// FUNCION DE FROMDOLLARTOYEN

test("One dolar should be 156.5 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(38.5);

    // Si 1 dolar son 156.5 yenes, entonces 38.5 dolares deben ser (38.5 * 156.5)
    const expected = 38.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(38.5)).toBe(6025.25); // 1 dolar son 156.5 yenes, entonces 38.5 dolares deberían ser = (38.5 * 156.5)
})


test("One yen should be 0.87 paunds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const paunds = fromYenToPound(10.8);

    // Si 1 yen son 0.87 libras, entonces 10.8 yenes debe ser (10.8 * 0.87)
    const expected = 10.8 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(10.8)).toBe(9.396); // 1 yen son 0.87 libras, entonces 10.8 yenes deberían ser = (10.8 * 0.87)
})