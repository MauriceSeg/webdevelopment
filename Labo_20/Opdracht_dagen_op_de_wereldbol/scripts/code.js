function bereken() {
    let geboorteInput = document.getElementById("geboorte").value;
    if (!geboorteInput) {
        document.getElementById("resultaat").innerText = "Kies een datum";
        return;
    }
    let geboorteDatum = new Date(geboorteInput);
    let vandaag = new Date();
    let verschilMs = vandaag - geboorteDatum;
    // Berekeningen
    let dagen = Math.floor(verschilMs / (1000 * 60 * 60 * 24));
    let resterendeMs = verschilMs % (1000 * 60 * 60 * 24);
    let uren = Math.floor(resterendeMs / (1000 * 60 * 60));
    let minuten = Math.floor(resterendeMs % (1000 * 60 * 60) / (1000 * 60));
    let seconden = Math.floor((resterendeMs % (1000 * 60)) / 1000);
    let milliseconden = resterendeMs % 1000;
    document.getElementById("resultaat").innerText =
        dagen + " dagen, " +
        uren + " uren, " +
        minuten + " minuten, " +
        seconden + " seconden, " +
        milliseconden + " milliseconden"
}
window.addEventListener("load", bereken);