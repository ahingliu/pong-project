import { SVG_NS, TEXT_SIZE } from '../settings';

export default class Score {
  constructor(xPosition, yPosition) {

    this.x = xPosition;
    this.y = yPosition;
  } 
 
  render(svg, score) {
     let text = document.createElementNS(SVG_NS, 'text');
     text.setAttributeNS(null, "fill", "yellow");
     text.setAttributeNS(null, "font-size", TEXT_SIZE);
     text.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
     text.setAttributeNS(null, "x", this.x);
     text.setAttributeNS(null, "y", this.y);
     text.textContent = score;
     svg.appendChild(text);
  }
     
  
}
