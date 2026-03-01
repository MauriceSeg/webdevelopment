const setup = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
};
const update = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    let kleur = "rgb(" + r + "," + g + "," + b + ")";
    colorDemos[0].style.backgroundColor= kleur;
    document.getElementById("OutputRed").innerHTML = " Red "+r;
    document.getElementById("OutputBlue").innerHTML = " Blue "+b;
    document.getElementById("OutputGreen").innerHTML = " Green "+g;

};
window.addEventListener("load", setup);