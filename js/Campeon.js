class Campeon {
    constructor(campeonJSON) {
        this.id = campeonJSON.id;
        this.nombre = campeonJSON.name;
        this.historia = campeonJSON.blurb;
        this.imagen = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+campeonJSON.id+"_0.jpg";
    }
    getDiv(){
        let divInfo = document.createElement("div");
        divInfo.className ="card";
        divInfo.innerHTML = `
        
            <img src="${this.imagen}" alt="">
        <h1>${this.nombre}</h1>
        <img class="border-img top" src="https://img.rankedboost.com/wp-content/uploads/2016/06/League-of-Legends-Profile-Banner-Trim-Season-Rewards.png" alt="">
        <p>${this.historia}</p>
        <button><a href="../info-campeon.html/${this.id}"><img src="https://electronicssoftware.net/wp-content/uploads/lol-icon.png" alt=""></a></button>
        <img class="border-img" src="https://img.rankedboost.com/wp-content/uploads/2016/06/League-of-Legends-Profile-Banner-Trim-Season-Rewards.png" alt="">        
        `;

        return divInfo;
    }
}