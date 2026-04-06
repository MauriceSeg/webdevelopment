let jsonString = "";

function maakJSON() {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: {
            straat: "Kerkstraat 13",
            gemeente: "Kortrijk"
        }
    };

    jsonString = JSON.stringify(student1);

    console.log(jsonString);
    document.getElementById("output").innerText = jsonString;
}

function leesJSON() {
    let student = JSON.parse(jsonString);

    document.getElementById("output").innerText =
        "Voornaam: " + student.voornaam;
}