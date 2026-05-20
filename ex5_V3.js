function impar_par(a){
    if(a % 2 == 0){
        c = "Par"
    }else{
        c = "Impar"
    }
    return c
}
let a = 7
let resp = impar_par(a)
console.log(`Resultado:${resp}`)
