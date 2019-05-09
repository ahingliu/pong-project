import { SVG_NS, SPEED } from '../settings';

export default class Paddle {
  constructor(boardHeight, paddleWidth, paddleHeight, initialX, initialY, keyUp, KeyDown) {
    this.boardHeight = boardHeight;
    this.paddleWidth = paddleWidth;
    this. paddleHeight = paddleHeight;
    this.x = initialX;
    this.y = initialY;
    this.score = 0; 
    this.speed = SPEED;     
      
  }
  render(svg) {
     let rect = document.createElementNS(SVG_NS, 'rect');
     rect.setAttributeNS(null, "width", this.paddleWidth);
     rect.setAttributeNS(null, "height", this.paddleHeight);
     rect.setAttributeNS(null, "fill", "white");
     rect.setAttributeNS(null, "x", this.x);
     rect.setAttributeNS(null, "y", this.y);
     svg.appendChild(rect);
  }
     
  
}
