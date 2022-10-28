
function converttousd () {
    let x = document.getElementById ("input").value;
    const y = 0.017;
    const input = parseFloat(x) * parseFloat(y);
    document.getElementById("display").innerHTML=input;
    document.getElementById("displayUnit").innerHTML= "USD";

   }

   function converttoyen () {
    let x = document.getElementById ("input").value;
    const y = 2.52;
    const input = parseFloat(x) * parseFloat(y);
    document.getElementById("display").innerHTML=input;
    document.getElementById("displayUnit").innerHTML= "Yen";
   }

   function converttowon () {
    let x = document.getElementById ("input").value;
    const y = 24.38;
    const input = parseFloat(x) * parseFloat(y);
    document.getElementById("display").innerHTML=input;
    document.getElementById("displayUnit").innerHTML= "Won";    

   }


