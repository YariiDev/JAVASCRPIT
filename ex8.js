//Calculando a media aritimetica do vetor

const notas = [8,25,6]

const soma_notas = notas.reduce((soma,atual)=>soma + atual,0)
const media = soma_notas / notas.length

console.log(media)