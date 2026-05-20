const vetorNomes = ['Marta','José','Maria']
//Todos os valores
console.log(vetorNomes)

//Primerio valor
console.log(vetorNomes[0])

//Adicionandando um elemento no final
vetorNomes.push('Mariana')
console.log(vetorNomes)

//Adicionandando um elemento no começo
vetorNomes.unshift('Ariel')
console.log(vetorNomes)

//Removendo um elemento no começo do arrays
vetorNomes.shift()
console.log(vetorNomes)

//Removendo o ultimo elemento do arrays
vetorNomes.pop()
console.log(vetorNomes)

//Laço de repetição para percorrer todo o arrays
console.log(`Indice: Nome`)
vetorNomes.forEach((nome, index) => {
    console.log(`${index}:${nome}`)
})
