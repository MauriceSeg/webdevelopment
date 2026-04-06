let personen = [];
let huidigeIndex = -1;

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();
    let fouten = document.getElementsByClassName("invalid");
    if (fouten.length > 0) {
        return;
    }

    // gegevens ophalen
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };

    // nieuw of bestaand?
    if (huidigeIndex === -1) {
        personen.push(persoon);
    } else {
        personen[huidigeIndex] = persoon;
    }

    updateLijst();
};

// 👉 NIEUW
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    huidigeIndex = -1;

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    clearAllErrors();
};

// 👉 LIJST UPDATEN
const updateLijst = () => {
    let lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        lst.appendChild(option);
    }
};

// 👉 SELECTIE UIT LIJST
const toonPersoon = () => {
    let lst = document.getElementById("lstPersonen");
    let index = lst.value;

    if (index === "") return;

    huidigeIndex = index;

    let persoon = personen[index];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

// 👉 SETUP
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);