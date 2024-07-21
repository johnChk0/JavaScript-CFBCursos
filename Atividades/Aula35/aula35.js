const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao = document.querySelector("#botao");
const todosCursos = [...document.querySelectorAll(".curso")];
todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    });
})
botao.addEventListener("click",()=>{
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(selecionado)")];
    todosCursos.forEach((ele)=>{
        console.log(ele)        
        if(!ele.classList.contains("selecionado")){
            caixa1.appendChild(ele)
        }else{
            caixa2.appendChild(ele)
        }
    })
});