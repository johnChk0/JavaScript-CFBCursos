const objs =document.getElementsByTagName("div");
for(o of objs){
    console.log(o.innerHTML="curso")
}
for(o in objs){
    console.log(objs[o])
}


//let num=[10,20,30,40,50];
//for(n of num){
//    console.log(num[n])
//}

//for(n in num){
//    console.log(num[n])
//}


//for(let i=0; i<num.length; i++){
//    console.log(num[i])
//}