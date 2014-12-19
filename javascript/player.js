var Player = (function() {

  function _Player(spec) {
    this.context = spec.context;
    this.img = new Image();
    this.img.src = 'images/terra.png'; 
    this.x = spec.x || 0
    this.y = spec.x || 0
    this.width = 30
    this.height = 30

    this.sourceWidth = 30
    this.sourceHeight = 30

    this.sourceX = 0;
    this.sourceY = 0;

    this.frameIndex = 0;
    this.allFrames = 3;
  }

  _Player.prototype.start = function() {
    _bindKeys.call(this);
  };

  _Player.prototype.draw = function() {
      this.context.drawImage( this.img, 
                              animationFrame.call(this), 
                              this.sourceY, 
                              this.sourceWidth, 
                              this.sourceHeight, 
                              this.x, 
                              this.y, 
                              this.width, 
                              this.height);
    
  }

  function _bindKeys() {
    var self = this;
    document.addEventListener('keydown', function(event) {

      var delta = 5;

      //left      
      if(event.keyCode == 37) {
        self.moveLeft(delta);
      } 

      //up
      if(event.keyCode == 38) {
        self.moveUp(delta);
      } 

      //right
      if(event.keyCode == 39) {
        self.moveRight(delta);
      } 

      //down
      if(event.keyCode == 40) {
        self.moveDown(delta);
      }                   

      self.frameIndex = self.frameIndex + 1;

    }, false);
  }

  function animationFrame() {
    return this.sourceWidth * (this.frameIndex % this.allFrames)
  }

  _Player.prototype.moveUp = function(delta) {
      this.y = this.y - delta;

      this.sourceY = 0;
  }

  _Player.prototype.moveDown = function(delta) {
      this.y = this.y + delta;

      this.sourceY = 30;
  }

  _Player.prototype.moveLeft = function(delta) {
      this.x = this.x - delta;

      this.sourceY = 60;
  }

  _Player.prototype.moveRight = function(delta) {
      this.x = this.x + delta;

      this.sourceY = 90;
  }    

  return _Player;

})();