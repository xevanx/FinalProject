import React, { useState } from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { createStage, checkCollision } from '../gameHelpers';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import axios from 'axios';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Tetris = () => {
  
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  // console.log('re-render');
  // const Tetris_Data = new Schema ({
  //   user_id: {type: String},
  //   score: {type: Number},
  //   date: {type: Date, default: Date.now}
  // });
  // tetrisSchema.save(function (err) {
  //   if (err) return handleError(err);
  // });
  
  const { user } = useAuth0();
  const UserId = [];
  axios.post('http://localhost:3001/api/user', user)
            .then( res => {
                UserId.push(res.data._id)
            })
            
  

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 87) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        //Output final game score before reset
        setGameOver(true);
        setDropTime(null);
        //Final score and id
        // Schema.create({ userName: `${UserId}`, score: `${score}` }, function (err, tetrisSchema) {
        //   if (err) return handleError (err);
        // });
        console.log(score);
        console.log(UserId);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 65) {
        movePlayer(-1);
      } else if (keyCode === 68) {
        movePlayer(1);
      } else if (keyCode === 83) {
        dropPlayer();
      } else if (keyCode === 87) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
