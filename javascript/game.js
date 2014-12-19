var Game = (function() {

    function _Game(spec) {
      this.context = spec.context
      this.delay = spec.delay || 100
    }


    _Game.prototype.start = function() {

      this.player = new Player({
        context: this.context
      });

      this.player.start();

      gameLoop.call(this);
      
    }


    function gameLoop() {
      var self = this;

      self.context.fillStyle = "#C7C7C7"
      self.context.fillRect(0, 0 , 1000, 800);
      self.player.draw();
      setTimeout(function(){
        gameLoop.call(self)
      }, this.delay);      
    }

    return _Game;

})(Player);