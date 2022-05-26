class Game{
  constructor(){
    this.resetButton = createButton("");
  }

  reset(){
    this.resetButton.position(width-50,30);
    this.resetButton.class("resetButton")
    this.resetButton.mousePressed(( ) =>{
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}


      })
    })
  }

  start(){
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    player1 = createSprite(50, 50);
    player1.shapeColor = "cyan"

    player2 = createSprite(width - 50, height - 50);
    player2.shapeColor = "lime"
    
    gamers = [player1, player2];

    drawSprites();

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  play(){
    form.hide();
    this.reset();
    Player.getInfo();
    if(allPlayers !== undefined){
      var Index = 0
      for(var plr in allPlayers){
        Index = Index + 1
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

        gamers[Index-1].position.x = x
        gamers[Index-1].position.y = y
        
      }
       player.playerControls();
    }
    drawSprites();
    
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        carsAtEnd: 0
      });
      window.location.reload();
    });
  }

}
