const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const countlabel = document.getElementById("Countlabel");
let count = 0;
increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}