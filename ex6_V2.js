function verificar(a){
    if (a == 0){
        resp = "Neutro"
    }else if(a > 0){
        resp = "Positivo"
    }else{
        resp = "Negativo"
    }
    return resp
}

let a = -1000
resultado = verificar(a)
console.log(`Resultado:${a} é ${resultado}`)