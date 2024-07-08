const sum = (arr1,arr2) =>{
return arr1+arr2;
};
console.log(sum(15,24))


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // CONVERTIMOS EL VALOR A YENES
    let valueInYenes = valueInDollar * 156.5;
    // RETORNAMOS EL VALOR EN YENES
    return valueInYenes;
}
const fromYenToPound = function(valueInYenes){
    // CONVERTIMOS EL VALOR A LIBRAS
    let valueInPaund = valueInYenes * 0.87;
    // RETORNAMOS EL VALOR EN LIBRAS
    return valueInPaund;
}
module.exports  = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}