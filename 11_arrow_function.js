//Arrow Function (funçao flecha)

const somar = (a,b) => {
    return a + b
}
const subitrair = (a,b) => {
    return a - b
}
const multiplicar = (a,b) => a * b

const dividir = (a,b) => a / b //da pra fazer se for so uma linha,dentro das chaves


const soma = somar(3,2)
const subi = subitrair(3,2)
const mult = multiplicar(3,2)
const divi = dividir(3,2)

console.log(`Soma:${soma}`)
console.log(`Subitração:${subi}`)
console.log(`Multiplicação:${mult}`)
console.log(`Divisão:${divi}`)