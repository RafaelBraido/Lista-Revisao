function calcularMedia(numeros) {
    if (numeros.length === 0) return 0;
    
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}
const lista = [10, 20, 30, 40, 50];
console.log(calcularMedia(lista));