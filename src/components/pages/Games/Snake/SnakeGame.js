import React, { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
import axios from 'axios';
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";

// let { user } = this.props.Auth0()


const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: "RIGHT",
  snakeBlocks: [[0, 0], [2, 0], [4, 0]]
};

class SnakeGame extends Component {

  constructor(props) {
    super();
    this.state = initialState;
  }

  speed() {
    clearInterval(this.interval);
    this.interval = setInterval(this.moveSnake, this.state.speed);
  }
  componentDidMount() {
    this.speed();
    document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
    this.speed();
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      default:
        break;
    }
  };
  moveSnake = () => {
    let block = [...this.state.snakeBlocks];
    let head = block[block.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      default:
        break;
    }
    block.push(head);
    block.shift();
    this.setState({
      snakeBlocks: block
    });
  };
  checkIfOutOfBorders() {
    let head = this.state.snakeBlocks[this.state.snakeBlocks.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }
  checkIfCollapsed() {
    let snake = [...this.state.snakeBlocks];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(block => {
      if (head[0] === block[0] && head[1] === block[1]) {
        this.onGameOver();
      }
    });
  }
  checkIfEat() {
    let head = this.state.snakeBlocks[this.state.snakeBlocks.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      let score = null;
      if (this.state.score === isNaN || this.state.score === undefined) {
        score = 3;

      } else {
        score = this.state.score + 1
      }

      let newState = { ...this.state, score: score };


      newState.food = getRandomCoordinates();
      newState.snakeBlocks = this.enlargeSnake();
      newState.speed = this.increaseSpeed();
      this.setState(newState);
      this.speed();
      console.log("new score is", newState.score)

    }
  }
  enlargeSnake() {
    let newSnake = [...this.state.snakeBlocks];
    newSnake.unshift([]);
    return newSnake;
  }
  increaseSpeed() {
    if (this.state.speed > 50) {
      return this.state.speed - 10;
    }
  }

  onGameOver() {
   
    

    this.setState(initialState);
    
    alert(`Game Over. Snake length is ${this.state.snakeBlocks.length}`);
    // posts score and user's name to mongo DB if logged in. 
    
   

    axios.post('http://localhost:3001/api/snake', {
      data: 
        {userName: "user.name",
        score : this.state.score}
      })
 ;
    // axios.get('http://localhost:3001/api/snake')
    //   .then(data => {
    //     console.log(data)
    //   })

  }

  render() {
    
    return (
      <div className="container">
        <div className="score"> {this.state.score} </div>
        <div className="game-area">
          <Snake snakeBlocks={this.state.snakeBlocks} />
          <Food block={this.state.food} />
        </div>
      </div>
      
    );
  }
}
export default SnakeGame;
