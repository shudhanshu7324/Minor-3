const myInput = document.querySelector('.input');
console.log(myInput);

let str = '0123';
myInput.textContent = str;


const reset = document.getElementById('reset');
const equal = document.getElementById('equals');
const del = document.getElementById('del');

del.addEventListener('click' , ()=>{
    if(str != '0'){
        str = str.slice(0,str.length-1)
    }  
    myInput.textContent = str;
})

myInput.textContent = str;

reset.addEventListener('click' ,() => {
    myInput.textContent = 0;
})



