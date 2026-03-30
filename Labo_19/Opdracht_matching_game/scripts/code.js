let kaarten = [
    "kaart1.png", "kaart1.png",
    "kaart2.png", "kaart2.png",
    "kaart3.png", "kaart3.png",
    "kaart4.png", "kaart4.png",
    "kaart5.png", "kaart5.png",
    "kaart6.png", "kaart6.png"
];

let flippedCards = [];
let isBusy = false;

const board = document.getElementById("gameBoard");

// shuffle kaarten
kaarten.sort(() => Math.random() - 0.5);

// kaarten maken
kaarten.forEach((img) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = img;

    card.addEventListener("click", () => {
        if (isBusy || card.classList.contains("flipped") || card.classList.contains("matched")) return;

        // kaart omdraaien
        card.classList.add("flipped");
        card.style.backgroundImage = `url(images/${img})`;

        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    });

    board.appendChild(card);
});

function checkMatch() {
    isBusy = true;

    let [c1, c2] = flippedCards;

    if (c1.dataset.image === c2.dataset.image) {

        // juiste kaarten → groen
        c1.classList.add("correct");
        c2.classList.add("correct");

        setTimeout(() => {
            c1.classList.add("matched");
            c2.classList.add("matched");

            c1.classList.remove("correct");
            c2.classList.remove("correct");

            flippedCards = [];
            isBusy = false;
        }, 800);

    } else {

        // foute kaarten → rood
        c1.classList.add("wrong");
        c2.classList.add("wrong");

        setTimeout(() => {
            c1.classList.remove("flipped", "wrong");
            c2.classList.remove("flipped", "wrong");

            c1.style.backgroundImage = "url(images/achterkant.png)";
            c2.style.backgroundImage = "url(images/achterkant.png)";

            flippedCards = [];
            isBusy = false;
        }, 1000);
    }
}