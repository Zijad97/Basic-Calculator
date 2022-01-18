'use strict';

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelectorAll('.calculator-keys button')
const display = calculator.querySelector('.calculator-display')

let firstNumber;
let operator;
let result;
let previous;

keys.forEach(function(key){
  key.addEventListener('click',function(){
   const type=key.dataset.type

   if(type==='number'){
     if(display.textContent==='0'){
       display.textContent=key.textContent
     }
     
    
      else {display.textContent+=key.textContent}
     
   }
   if(type==='operator'){
     firstNumber=Number(display.textContent);
     operator=key.dataset.key
     display.textContent='0'
     previous=operator
     console.log(firstNumber);
     console.log(operator);
     console.log(previous);
  
   }
   if(type==='equal' ){
     if(operator==='plus')display.textContent=firstNumber+Number(display.textContent)
     if(operator==='minus')display.textContent=firstNumber-Number(display.textContent)
     if(operator==='times')display.textContent=firstNumber*Number(display.textContent)
     if(operator==='divide')display.textContent=firstNumber/Number(display.textContent)
       
     }
     if(type==='clear'){
       display.textContent='0'
       firstNumber=0
     }
   
  })
})