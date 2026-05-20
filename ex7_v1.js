vetorNumeros = [2,4,6,1,3,5]
par = 0
impar = 0

vetorNumeros.forEach(element => {
    if (element % 2 == 0){
        par +=1
    }else{
        impar += 1
    }
})

console.log(`Par:${par}`)
console.log(`Impar:${impar}`)