const setup = () => {
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    let color = document.getElementById("color");
    let save = document.getElementById("save");
    let result = document.getElementById("result");
    const update = () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        color.style.backgroundColor =
            "rgb(" + r + "," + g + "," + b + ")";
    };
    red.addEventListener("input", update);
    green.addEventListener("input", update);
    blue.addEventListener("input", update);
    save.addEventListener("click", () => {
        let div = document.createElement("div");
        div.className = "swatch";
        div.style.backgroundColor =
            color.style.backgroundColor;
        let btn = document.createElement("button");
        btn.textContent = "X";
        btn.className = "delete";
        btn.addEventListener("click", () => {
            div.remove();
        });
        div.addEventListener("click", () => {
            color.style.backgroundColor =
                div.style.backgroundColor;
        });
        div.appendChild(btn);
        result.appendChild(div);
    });

};
window.addEventListener("load", setup);