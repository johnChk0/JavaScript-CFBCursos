//function* cores(){
//    yield 'Vermelho' 
//    yield 'verde'
//    yield 'Azul'
//}
//const itc = cores()
//console.log(itc.next().value) // Vermelho
//console.log(itc.next().value) // Verde
//console.log(itc.next().value) // Azul




/*
function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)
*/


function* contador(){
    let i=0
    while(true){
        yield ++i
    }
}
const itc = contador()
for(let i=0; i<10; i++){
    console.log(itc.next().value) // 1 ate 10
}

