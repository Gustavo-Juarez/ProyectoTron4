class Player{
  constructor(){
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.life = 3;
    this.velocityX = false;
    this.velocityY = false;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  addPlayer(){

  if(this.index == 1){
    this.positionX = 50
    this.positionY = 50
  }
  else {
    this.positionX = width - 50
    this.positionY = height - 50
  }
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      life: this.life
    })
  }
   static getInfo(){
     var playerInfo = database.ref("players");
     playerInfo.on("value",data => {
       allPlayers = data.val();
     })
   }
   playerControls(){
     if(keyIsDown(UP_ARROW)){
       player.positionY = player.positionY - 2;
    this.velocityY = true;
       this.update();
     }
     if(keyIsDown(DOWN_ARROW)){
       player.positionY = player.positionY + 2;
    this.velocityY = true;
       this.update();
     }
      if(keyIsDown(LEFT_ARROW)){
        player.positionX = player.positionX - 2;
        this.velocityX = true;
        this.update();
      }
      if(keyIsDown(RIGHT_ARROW)){
        player.positionX = player.positionX + 2;
        this.velocityX = false;
        this.update();
      }
   }
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX:this.positionX,
        positionY:this.positionY,
        rank:this.rank,
        life:this.life
      })
    }
}