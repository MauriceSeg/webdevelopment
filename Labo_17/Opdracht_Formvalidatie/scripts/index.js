const isGetal = (tekst) => {
    return !isNaN(tekst);
};
function clearFouten() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }
    for (let i = 1; i <= 5; i++) {
        document.getElementById("f" + i).innerHTML = "";
    }
}
function fout(id, msg, veld) {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(veld).classList.add("error");
}
function valideer() {
    clearFouten();
    let ok = true;
    let voornaam = document.getElementById("voornaam").value.trim();
    if (voornaam.length > 30) {
        fout("f1", "max 30 karakters", "voornaam");
        ok = false;
    }
    let familienaam = document.getElementById("familienaam").value.trim();
    if (familienaam.length === 0) {
        fout("f2", "verplicht veld", "familienaam");
        ok = false;
    }
    else if (familienaam.length > 50) {
        fout("f2", "max 50 karakters", "familienaam");
        ok = false;
    }
    let datum = document.getElementById("datum").value.trim();
    if (datum.length === 0) {
        fout("f3", "verplicht veld", "datum");
        ok = false;
    }
    else {
        if (datum.length !== 10 || datum[4] !== "-" || datum[7] !== "-") {
            fout("f3", "formaat is niet jjjj-mm-dd", "datum");
            ok = false;
        }
    }
    let email = document.getElementById("email").value.trim();
    if (email.length === 0) {
        fout("f4", "verplicht veld", "email");
        ok = false;
    }
    else {
        let parts = email.split("@");
        if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
            fout("f4", "geen geldig email adres", "email");
            ok = false;
        }
    }
    let kinderen = document.getElementById("kinderen").value.trim();
    if (!isGetal(kinderen) || kinderen < 0) {
        fout("f5", "is geen positief getal", "kinderen");
        ok = false;
    }
    else if (kinderen >= 99) {
        fout("f5", "is te vruchtbaar", "kinderen");
        ok = false;
    }
    if (ok) {
        alert("proficiat!");
    }
}