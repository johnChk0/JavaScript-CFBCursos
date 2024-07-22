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
    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src", "./img_lixeira.jpeg")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.appendChild(btn_lixeira)
    btn_lixeira.addEventListener("click", (evt)=>{
        const elemento = evt.target.parentNode
        console.log(elemento)
        caixa1.removeChild(evt.target.parentNode)
    });
    caixa1.appendChild(novoElemento)
});

const novoElemento=document.createElement("div");
novoElemento.setAttribute("class","curso")
novoElemento.innerHTML="Hello world!"
caixa1.appendChild(novoElemento)

 
