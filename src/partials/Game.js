import {
  SVG_NS,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BOARD_GAP,
  KEYS,
  RADIUS,
  SPEED
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Ball1 from './Ball.1';
import Ball2 from './Ball.2';
import Ball3 from './Ball.3';
import Ball4 from './Ball.4';
import Score from './Score';




export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused - false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    const boardMid = (this.height - PADDLE_HEIGHT) / 2;
    this.paddle1 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, boardMid, KEYS.p1up, KEYS.p1down);
    const paddle2Gap = this.width - BOARD_GAP - PADDLE_WIDTH;
    this.paddle2 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, paddle2Gap, boardMid, KEYS.p2up, KEYS.p2down);
    this.ball = new Ball(this.width, this.height, RADIUS);
    this.ball1 = new Ball1(this.width, this.height, RADIUS);
    this.ball2 = new Ball2(this.width, this.height, RADIUS);
    this.ball3 = new Ball3(this.width, this.height, RADIUS);
    this.ball4 = new Ball4(this.width, this.height, RADIUS);
    this.score1 = new Score(this.width / 2 - 50, 30);
    this.score2 = new Score(this.width / 2 + 25, 30);

    document.addEventListener("keydown", (event) => {
      if (event.key === KEYS.pause) {
        this.paused = !this.paused;
        this.paddle1.setSpeed(SPEED);
        this.paddle2.setSpeed(SPEED);
      }
    });

    // Other code goes here...
  }

  render() {
    if (this.paused) {
      this.paddle1.setSpeed(0);
      this.paddle2.setSpeed(0);
      return;
    }
    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.ball.render(svg, this.paddle1, this.paddle2);
    this.ball1.render(svg, this.paddle1, this.paddle2);
    this.ball2.render(svg, this.paddle1, this.paddle2);
    this.ball3.render(svg, this.paddle1, this.paddle2);
    this.ball4.render(svg, this.paddle1, this.paddle2);
    this.score1.render(svg, this.paddle1.getScore());
    this.score2.render(svg, this.paddle2.getScore());


    if (this.paddle1.getScore() === 10) {
      this.paused = !this.paused;
      this.gameElement.innerHTML = 'Player 1 wins';
      const p = document.querySelectorAll('p');
      p[0].setAttribute('style', 'display: none');
      p[1].setAttribute('style', 'display: none');

    } else if (this.paddle2.getScore() === 10) {
      this.paused = !this.paused;
      this.gameElement.innerHTML = 'Player 2 wins';
      const p = document.querySelectorAll('p');
      p[0].setAttribute('style', 'display: none');
      p[1].setAttribute('style', 'display: none');
    }
  }
}