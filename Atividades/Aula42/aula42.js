
const idades=[15,21,30,17,18,44,52,50]
const maior = idades.filter((valor)=>{
    if(valor>=18)
        return valor
})
const menor = idades.filter((valor)=>{
    if(valor < 18)
        return valor
})
console.log([...idades])
console.log([...maior])
console.log([...menor])
