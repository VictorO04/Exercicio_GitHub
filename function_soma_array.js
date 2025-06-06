function somaArray(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma;
}

console.log(somaArray([5, 4, 1, 4, 10, 20]));