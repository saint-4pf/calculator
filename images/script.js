console.log("script loaded");

let display = document.getElementById("display");

function press(value){
    display.value+=value;

}
function clearDisplay(){
//    display.value = "";
   document.getElementById("display").value='';

}
//  function appendValue(value){
//  document.getElementById('display').value +=value
// }
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
     if (display.value == "") return;
display.value=eval(display.value);
    }
    catch(error){
        display.value="Enter";
    }
    }
