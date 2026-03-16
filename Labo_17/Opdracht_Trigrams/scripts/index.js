const actie = () => {
    let tekst = "plezier onoorbaar";
    for (let i = 0; i < tekst.length - 2; i++) {
        console.log(tekst.slice(i, i + 3));
    }
}
window.addEventListener("load", actie);