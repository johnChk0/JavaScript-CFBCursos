const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const c1_2 = document.querySelector("#c1_2")
const botao = document.querySelector("#botao");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MYSQL", "ReactNative"]
cursos.map((el, id)=>{
    console.log(id)
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute(`class`,`curso c${id}`)
    novoElemento.innerHTML = el;
    caixa1.appendChild(novoElemento)
});


const novoElemento=document.createElement("div");
novoElemento.setAttribute("class","curso")
novoElemento.innerHTML="Hello world!"
caixa1.appendChild(novoElemento)

 
