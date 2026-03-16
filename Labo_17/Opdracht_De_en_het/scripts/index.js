let zintje = 'DE gemeenten de het man de man de deasldkf sldfdlmsdfjsde delsdjljde de'
let zin = zintje.toLowerCase()
const actie = () => {

    if (zin.substring(0, 3) === 'de '){
        zin = 'het' + zin.slice(2);
        console.log(zin)
    }
    if (zin.substring(zin.length-3, zin.length) === ' de'){
        console.log(zin.substring(zin.length-3, zin.length))
        zin = zin.slice(0, zin.length-2) +'het'
        console.log(zin)
    }
    for (let i = 0; i < zin.length; i++) {
        if (zin.substring(i, i+4) === ' de '){
            zin = zin.slice(0, i+1) +'het' + zin.slice(i +3)
            console.log(zin)
        }
    }
    console.log(zin)
}
window.addEventListener("load", actie);