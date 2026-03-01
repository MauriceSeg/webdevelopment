const setup = () => {
    document.getElementById("herbereken")
        .addEventListener("click", herbereken);
};
const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseFloat(aantallen[i].value);
        let btwPercentage = parseFloat(btw[i].textContent);

        let berekening = prijs * aantal * (1 + btwPercentage / 100);
        subtotaal[i].textContent = berekening.toFixed(2) + " Eur";

        totaal += berekening;
    }

    document.getElementById("totaal").textContent =
        totaal.toFixed(2) + " Eur";
};
window.addEventListener("load", setup);