class Campeon {
    constructor(campeonJSON) {
        this.id = campeonJSON.id;
        this.nombre = campeonJSON.name;
        this.historia = campeonJSON.blurb;
        this.mana = campeonJSON.partype;
        this.imagen = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+campeonJSON.id+"_0.jpg";
    }
    getDiv(){
        let divInfo = document.createElement("div");
        divInfo.className ="card";
        divInfo.innerHTML = `
        
            <img class ="banner-img"src="${this.imagen}" alt="">
            <div class="info">
            <h1>${this.nombre}</h1>
            <div></div>
        <img class="border-img top" src="https://img.rankedboost.com/wp-content/uploads/2016/06/League-of-Legends-Profile-Banner-Trim-Season-Rewards.png" alt="">
        <p>${this.historia}</p>
        <img class="border-img" src="https://img.rankedboost.com/wp-content/uploads/2016/06/League-of-Legends-Profile-Banner-Trim-Season-Rewards.png" alt="">        
        <button><a href="info-campeon.html/?id=${this.id}"><img src="https://electronicssoftware.net/wp-content/uploads/lol-icon.png" alt=""></a></button>
        </div>       
        `;

        return divInfo;
    }
}