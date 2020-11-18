class Player{
    constructor(){
        this.index=null;
        this.goal=0;
        this.name=null;
    }

    
updateCount(count){
database.ref("/").update({
    playerCount:count
})
    
}

update(){
    var playerIndex =  "players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name
        
    })
}

getCount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",(data)=>{
        playerCount = data.val();
    })
}

static getPlayerInfo(){
var playerCountref=database.ref("players");
 playerCountref.on("value",(data)=>{
    allPlayers = data.val();
})
}
}
