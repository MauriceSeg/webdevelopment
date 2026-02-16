let familie = ["Jan", "Piet", "Marie", "Els", "Tom"];

console.log(familie.length);

console.log(familie[0]);
console.log(familie[2]);
console.log(familie[4]);

const VoegNaamToe = (namenArray) => {
    let nieuweNaam = prompt("Geef een extra naam:");
    if (nieuweNaam !== null && nieuweNaam !== "") {
        namenArray.push(nieuweNaam);
    }
};

VoegNaamToe(familie);
console.log(familie);
console.log(familie.join(", "));



















