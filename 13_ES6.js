const vetorNumeros = [10,9,87,65,82,-1]

//Não alterando o vetor principal
console.log("Multiplicando todos os numeros do vetor")
const dobrados = vetorNumeros.map(n => n*2)
console.log(dobrados)
console.log(vetorNumeros)

//Não alterando o vetor principal
console.log("Filtrando numeros Impares")
const impares = vetorNumeros.filter(n => n % 2 == 1)
console.log(impares)

console.log("Filtrando numeros pares")
const pares = vetorNumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("Filtrando numeros negativos")
const negativo = vetorNumeros.filter(n => n<0)
console.log(negativo)

console.log("Somando todos os elementos do vetor")
const total = vetorNumeros.reduce((soma,atual)=> soma + atual,0)
console.log(total)
