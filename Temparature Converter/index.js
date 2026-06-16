const textbox = document.getElementById("textbox");
const celius = document.getElementById("celius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");
let temp ;
function convert(){
      if(celius.checked){
         temp = (parseFloat(textbox.value) * 9/5) + 32;
         result.textContent = temp.toFixed(2) + " °F";
      }
      else if(fahrenheit.checked){
         temp = (parseFloat(textbox.value) - 32) * 5/9;
         result.textContent = temp.toFixed(2) + " °C";
      }
      else {
        result.textContent = "Select a unit";
      }
}
