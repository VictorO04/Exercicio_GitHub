function calculeamedia(array){
    if (array.length === 0){
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma / array.length
}
const numeros= [7,7,7]
const resultado = calculeamedia (numeros);
console.log("a media sera de ")
console.log(resultado);