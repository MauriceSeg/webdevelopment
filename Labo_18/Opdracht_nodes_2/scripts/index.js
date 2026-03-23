let li = document.querySelectorAll("li");
for(let i=0;i<li.length;i++){
    li[i].className="listitem";
}
let img = document.createElement("img");
img.setAttribute("src","foto.jpg");
document.body.appendChild(img);