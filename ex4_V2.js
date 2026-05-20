function soma_multi(a,b){
    if (a == b){
        c = a + b
    }else{
        c = a * b
    }
    return c
}

a = 4
b= 5
resp = soma_multi(a,b)

console.log(`Resultado:${resp}`)