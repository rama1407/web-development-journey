const buttons = document.getElementById("buttons");
const label = document.getElementById("label");
let value;
buttons.onclick = function(){
    value = Math.floor(Math.random()*6)+1;
    label.textContent = value;
}