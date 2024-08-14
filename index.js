const input = document.getElementById('input');
console.log(input.value);

function inputValue(a){
    if(input.value == '' && (a == '*' || a =='/')){

    }else{
        input.value += a;
    }
}

function deleteValue(){
    input.value = input.value.slice(0,-1);
}

function clearInput(){
    input.value = '';
}



function calculate() {
    
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }

    
}
































// function startBlinking() {
//     if (myInput.innerText === "") {
//         myInput.innerText = "0";
//         setTimeout(() => {
//             myInput.innerText = "";
//             console.log("exe");
            
//         }, 1000);
//     }
// }

// setInterval(startBlinking, 500);