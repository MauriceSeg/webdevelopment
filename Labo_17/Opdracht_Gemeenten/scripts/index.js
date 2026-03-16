function start() {
    let arr = [];
    let invoer;
    while (true) {
        invoer = prompt("gemeente");
        if (invoer === "stop" || invoer === null) {
            break;
        }
        arr.push(invoer);
    }
    arr.sort();
    let lijst = document.getElementById("lijst");
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement("option");
        option.text = arr[i];
        lijst.add(option);
    }
}