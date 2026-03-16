function lees() {
    let resultaat = "";
    let roker = document.getElementById("roker").checked;
    if(roker){
        resultaat += "Is roker\n";
    }else{
        resultaat += "Is geen roker\n";
    }
    let radios = document.getElementsByName("taal");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resultaat += "Moedertaal: " + radios[i].value + "\n";
        }
    }
    let land = document.getElementById("land").value;
    resultaat += "fovoriete land: " + land + "\n";
    let select = document.getElementById("bestelling");
    let lijst = [];
    for (let i = 0; i < select.options.length; i++) {

        if (select.options[i].selected) {

            lijst.push(select.options[i].text);
        }
    }
    resultaat +=
        "Bestelling: " +
        lijst.join(", ");
    console.log(resultaat);
}