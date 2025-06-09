function filtrarNegativos(numeros) {
  return numeros.filter(function(numero) {
    return numero < 0;
  });
}


const number = [20, -10, 30, -15, 0, -90];
const negativos = filtrarNegativos(number);

console.log("Números negativos:", negativos);