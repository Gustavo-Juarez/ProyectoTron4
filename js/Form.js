class Form{
  constructor(){
    this.title = createElement("h1");
    this.input = createInput("Ingresa tu nombre")
    this.playButton = createButton("PLAY")
    this.welcome = createElement("h3")
  }

  display(){
    this.title.position(width/2 - 350,20);
    this.title.class("gameTitle");
    this.title.html("Mi intento de TRON");
    this.input.position(width/2 - 100,height/2 - 80);
    this.input.class("customInput");
    this.playButton.position(width/2 - 90,height/2);
    this.playButton.class("customButton");
    this.welcome.position(width/2 - 290,height/2);
    this.welcome.class("greeting");

    this.welcomeMousePressed()
  }

  welcomeMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.welcome.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.updateCount(playerCount);
      
    });
  }

  hide() {
    this.title.hide();
    this.input.hide();
    this.playButton.hide();
    this.welcome.hide();
  }

}