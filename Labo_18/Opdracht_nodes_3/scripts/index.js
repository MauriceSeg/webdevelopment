let btn = document.getElementById("btn");
let div = document.getElementById("myDIV");

btn.addEventListener("click",function(){

    let p = document.createElement("p");

    p.textContent="nieuw";

    div.appendChild(p);

});