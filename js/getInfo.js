"use strict";
document.addEventListener("DOMContentLoaded", main);

function getDetails(campeon) {
    return fetch("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/" + campeon + ".json")
        .then(respuesta => respuesta.json())
        .then(json => json.data[campeon]);
}

async function main() {
    let campeon = new URLSearchParams(window.location.search).get("id")
    let details = await getDetails(campeon);
    let body = document.querySelector(".body");
    let infoDiv = document.createElement("div");
    infoDiv.className = "info-campeon";
    infoDiv.innerHTML = `<div class="info-campeon">
    <img class="img-campeon" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon}_0.jpg">
    <div class="stats">
        <div class="head">
            <img src="http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/${campeon}.png" alt="">
            <h1>${campeon}</h1>
        </div>
        <div class="head">
            <img src="http://ddragon.leagueoflegends.com/cdn/10.23.1/img/passive/${details.passive.image.full}" alt="">
            <h1>${details.passive.name}</h1>
        </div>
        <h2>${details.title}</h2>
        <p>
            ${details.blurb}
        </p>
                
    </div>
    </div>`;


    let skinsDiv = document.createElement("details");
    skinsDiv.innerHTML = "<summary>Skins</summary>"


    let div = document.createElement("div");
    div.className = "skins";


    details.skins.forEach(
        skin => {
            let img = document.createElement("div");
            img.innerHTML += `
                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon}_${skin.num}.jpg" alt="">
                       <h4>
                            <img src="https://i.pinimg.com/originals/5c/9f/0a/5c9f0a770467b2334436ec449ed50f02.png" alt="">
                            <span>${skin.name}</span>
                            <img src="https://i.pinimg.com/originals/5c/9f/0a/5c9f0a770467b2334436ec449ed50f02.png" alt="">
                       </h4>
            `;
            div.appendChild(img);
        }
    );
    skinsDiv.appendChild(div);


    body.appendChild(infoDiv);
    body.appendChild(skinsDiv);


}