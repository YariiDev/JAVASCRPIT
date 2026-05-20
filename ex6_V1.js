function verificar(a){
    if (a == 0){
        console.log(`${a} é neutro`)
    }else if(a > 0){
        console.log(`${a} é positivo`)
    }else{
        console.log(`${a} é negativo`)
    }
}

let a = -1
verificar(a)