let displayBox=document.querySelector(".display");

let butttonList=document.querySelectorAll(".show-display");
function show(event){
    const x=event.target.innerText;
    if(displayBox.innerText==0){
       return displayBox.innerText=x;   
    }
    else{
        return displayBox.innerText +=x;
    } 
}
butttonList.forEach(button=>{button.addEventListener("click",show)})


function calculate(){
   displayBox.innerText = eval(displayBox.innerText);
}
document.querySelector(".calculate").addEventListener("click",calculate);

function clearAll(){
    displayBox.innerText=0;
}
document.querySelector(".clear-all").addEventListener("click",clearAll);

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
document.querySelector(".clear-last").addEventListener("click", clear);