// let text = document.getElementById("texts")
// let textcout = document.getElementById("textcount")


//  console.log(text)

// text.addEventListener("keyup",()=>{
//     let length = text.value.length;
//     let limit = 50;
//     let count = limit - length;
//     if(count < 50){
//         textcout.innerHTML=count +"/50 remaing"
//     }else{
//         textcout.innerHTML=count +"/50 remaing"
//     }

// if (count ===0) {
//     textcout.style.color="red"

//     textcout.innerHTML="your reamaing character is 0"
// }

// })
let height=document.getElementById("height")
let heightinch=document.getElementById("heightinch")
let weight=document.getElementById("weight")
let result = document.getElementById("result")
let bmi ;

function calculate(){
console.log(calculate)
let hchanage=Number(height.value)*0.3048
let hinchchange=Number(heightinch.value)*0.0254
let totalmeter =hchanage+hinchchange;
let weightcon=Number(weight.value)
bmi = (weightcon / Math.pow( totalmeter,2 )).toFixed(2);
 result.textContent=bmi

 if(bmi < 18.5){
    result.textContent=bmi+"you are underage "
    result.style.color="orange"
 } else if( bmi >= 18.5 && bmi <=24.9){
    result.textContent=bmi+"Normal"
    result.style.color=bmi+"green"
 }else if ( bmi >=25 && bmi <= 29.9){
    result.textContent= bmi +"you are over weight"
    result.style.color= bmi +"red"
 }else{
   result.textContent=bmi+"obasite"
   result.style.color="red"
 }
}

