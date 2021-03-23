let start = 0;
let number = document.getElementById('number');

document.getElementById("increase").addEventListener("click",increment)
document.getElementById("decrease").addEventListener("click",decrement)
document.getElementById("reset").addEventListener("click",reset)

function increment(){
start += 1;
number.innerHTML = start;
}
function decrement(){
   if(start > 0) {
       start -= 1
   }
   number.innerHTML = start;
}
function reset(){
    start = 0;
    number.innerHTML = start;
}