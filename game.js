class Game{
    constructor(){
        
    }

    async start(){
        form = new Form();
        form.display();

        if(gameState===0){
            player = new Player();
           var playerCountref=await database.ref("playerCount");
           playerCountref.once("value");
           if(playerCountref.exists){
               playerCount=playerCountref.val();
               player.getCount();
           }
        }
        
    }

    getState(){
        var gameStateref=database("gameState");
        gameState.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("red");
            Image(carromboard,0,0,800,800);
        }
        
        

    }
    
}
