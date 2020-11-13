"use strict";
document.addEventListener("DOMContentLoaded", main);

async function obtenerCampeones() {
    return fetch("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json")
        .then(respuesta => respuesta.json())
        .then(json => {
            let arr = [];
            let champsJson = json.data;
            for (let champ in champsJson) {
                arr.push(new Campeon(champsJson[champ]));
            }
            return arr;
        })
}

function cargarCampeones(arrCampeones, contenedor) {
    contenedor.innerHTML = "";
    arrCampeones.forEach(campeon => {
        contenedor.appendChild(campeon.getDiv())
    });
}

async function main() {
    let arrCampeones = await obtenerCampeones();
    let contenedor = document.querySelector(".card-container");
    let inpChamp = document.querySelector("#nombreChamp");
    let inpPower = document.querySelector("#power");


    inpChamp.addEventListener("keyup", (e) => {
        let arrFilter = arrCampeones.filter(campeon => campeon.nombre.toUpperCase().includes(inpChamp.value.toUpperCase())).filter(campeon=>campeon.mana.includes(inpPower.value));
        cargarCampeones(arrFilter, contenedor)
    });
    inpPower.addEventListener("change", (e) => {
        let arrFilter = arrCampeones.filter(campeon => campeon.nombre.toUpperCase().includes(inpChamp.value.toUpperCase())).filter(campeon=>campeon.mana.includes(inpPower.value));
        cargarCampeones(arrFilter, contenedor)
    });
    cargarCampeones(arrCampeones, contenedor);
}