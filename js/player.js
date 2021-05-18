class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
          // create the property for the score and intialize with zero
        this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getBasketsAtEnd () {
        var BasketsAtEnd1 = database.ref('BasketsAtEnd');
        BasketsAtEnd1.on ("value", (data) => {
            this.score = data.val ();
        })
    }
    
    static updateBasketsAtEnd () {
        database.ref ('/').update ({
            BasketsAtEnd: score
        })
    }
}
