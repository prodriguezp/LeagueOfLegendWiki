"use strict";
document.addEventListener("DOMContentLoaded",main);

async function obtenerCampeones() {
    return fetch("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json")
        .then(respuesta => respuesta.json())
        .then(json => {
            let arr =[];
            let champsJson = json.data;
            for (let champ in champsJson){
                arr.push(new Campeon(champsJson[champ]));
            }
            return arr;
        })
}

async  function main() {
    let arrCampeones = await obtenerCampeones();
    let contenedor = document.querySelector(".card-container");
    arrCampeones.forEach(campeon => {
       contenedor.appendChild(campeon.getDiv())
    });
}