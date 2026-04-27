const setup = () => {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const color = document.getElementById("color");
    const save = document.getElementById("save");
    const result = document.getElementById("result");
    const colorPicker = document.getElementById("colorPicker");

    let colors = [];

    // Helpers
    const rgbToHex = (r, g, b) => {
        return "#" + [r, g, b]
            .map(x => (+x).toString(16).padStart(2, "0"))
            .join("");
    };

    const hexToRgb = (hex) => {
        let num = parseInt(hex.replace("#", ""), 16);
        return {
            r: (num >> 16) & 255,
            g: (num >> 8) & 255,
            b: num & 255
        };
    };

    // UI update
    const updateUI = () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hex = rgbToHex(r, g, b);

        color.style.backgroundColor = hex;
        colorPicker.value = hex;

        document.getElementById("OutputRed").innerHTML = "Red " + r;
        document.getElementById("OutputGreen").innerHTML = "Green " + g;
        document.getElementById("OutputBlue").innerHTML = "Blue " + b;

        saveStorage(); // sla ook sliderwaarden op
    };

    // ColorPicker sync
    const updateFromPicker = () => {
        let rgb = hexToRgb(colorPicker.value);

        red.value = rgb.r;
        green.value = rgb.g;
        blue.value = rgb.b;

        updateUI();
    };

    // Render favorieten
    const render = () => {
        result.innerHTML = "";

        colors.forEach(hex => {
            let div = document.createElement("div");
            div.className = "swatch";
            div.style.backgroundColor = hex;
            div.dataset.color = hex;

            let btn = document.createElement("button");
            btn.textContent = "X";
            btn.className = "delete";

            // verwijderen
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                colors = colors.filter(c => c !== hex);
                saveStorage();
                render();
            });

            // klikken → sliders aanpassen
            div.addEventListener("click", () => {
                let rgb = hexToRgb(hex);

                red.value = rgb.r;
                green.value = rgb.g;
                blue.value = rgb.b;

                updateUI();
            });

            div.appendChild(btn);
            result.appendChild(div);
        });
    };

    // Save (geen duplicaten)
    const saveColor = () => {
        let hex = colorPicker.value;

        if (!colors.includes(hex)) {
            colors.push(hex);
            saveStorage();
            render();
        }
    };

    // Storage opslaan (NU MET RGB!)
    const saveStorage = () => {
        const data = {
            colors: colors,
            r: red.value,
            g: green.value,
            b: blue.value
        };
        localStorage.setItem("colorData", JSON.stringify(data));
    };

    // Storage laden
    const loadStorage = () => {
        let data = JSON.parse(localStorage.getItem("colorData"));

        if (data) {
            colors = data.colors || [];

            if (data.r !== undefined) red.value = data.r;
            if (data.g !== undefined) green.value = data.g;
            if (data.b !== undefined) blue.value = data.b;
        }

        render();
    };

    // Events
    red.addEventListener("input", updateUI);
    green.addEventListener("input", updateUI);
    blue.addEventListener("input", updateUI);
    colorPicker.addEventListener("input", updateFromPicker);
    save.addEventListener("click", saveColor);

    // Init
    loadStorage();
    updateUI();
};

window.addEventListener("load", setup);