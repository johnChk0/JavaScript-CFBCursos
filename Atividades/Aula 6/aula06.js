/*
let v1={nome:"Bruno"}
let v2={nome:"Bruno"}

console.log(v1===v2)
*/

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/WebOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else{
    console.log("PC")
}