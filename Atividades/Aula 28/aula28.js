const converterInt=(e)=>parseInt(e)
let num=['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)


// const elements = document.getElementsByTagName('div');
// const val = Array.prototype.map.call(elements, ({innerHTML})=>innerHTML)


// let el=document.getElementsByTagName('div');
// el=[...el]
// el.map((e,i)=>{
//     e.innerHTML ="CFBCursos"
// });

// const cursos = ['HTML','CSS','JavaScript','PHP','REACT'];
// let c=cursos.map((element,indice)=>{
//     return "<div>"+element+"</div>"
//  });
// console.log(c)

//cursos.map((element,indice)=>{
   // console.log("Curso: "+ element + " - Posição do curso: " + indice);


//});