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
    let skinsDiv = document.createElement("div");
    skinsDiv.className = "skins";
    details.skins.forEach(
        skin => {
            let img = document.createElement("div");
            img.innerHTML += `
                <div>
                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon}_${skin.num}.jpg" alt="">
                       <h4>
                            <img src="https://img.rankedboost.com/wp-content/uploads/2016/06/Season_2019_-_Default_Trim.png" alt="">
                            <span>${skin.name}</span>
                            <img src="https://img.rankedboost.com/wp-content/uploads/2016/06/Season_2019_-_Default_Trim.png" alt="">
                       </h4>
                </div>
            `;
            skinsDiv.appendChild(img);
        }
    );

    setTimeout(function ()
    {
        body.querySelector(".gif").classList.add("none");
        body.appendChild(infoDiv);
        body.innerHTML +=`<h2>Skins de ${campeon}</h2>`;
        body.appendChild(skinsDiv);
    },2000)


}