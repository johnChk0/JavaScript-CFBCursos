/*
function soma(...valores){
    let tam = valores.length;
    let res=0;
    for(let i=0; i<tam;i++){
        res+=valores[i]
    }
}
console.log(soma(10,5,6,7,2));
*/
function soma(...valores){
    let res = 0
    for (let n of valores) {
        res+=n
    }
    return res
}    
console.log(soma(10,20,30))