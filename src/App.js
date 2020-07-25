import React, {useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import Scoreboard from './components/pages/Home/Scoreboard'
import About from '../src/components/pages/About/About'
import TetrisGame from './components/pages/Games/tetris/TetrisStart'
import SnakeGame from './components/pages/Games/Snake/SnakeGame'
import Game from './components/pages/Games/Tictactoe/Game'
import LoginButton from './components/pages/Login/LoginButton'
// import { UserContext } from './UserContext';
import Profile from '../src/components/Profiles/Profiles'
import Minesweeper from './components/pages/Games/minesweeper/minesweeper';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import './components/Img/Web-back.jpg';


const UserContext = React.createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [userName, setUserName] = useState('')
  const { user } = useAuth0();
  const UserId = [];
  axios.post('http://localhost:3001/api/user', user)
    .then( res => {
        console.log(res.data._id);
        UserId.push(res.data._id)
    })


  const updateUser = (user) => {
    setLoggedInUser(user);
  };

  // useEffect(() => {
  //   console.log("test", user)
  //   axios.get('http://localhost:3001/api/user', user)
  // }, [user] )

  return (
    <div className='App'>
      <Header />
        <UserContext.Provider value={UserId}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Scoreboard" exact component={Scoreboard} />
            <Route path="/profile" exact render={()=><Profile updatedUser={updateUser}/>}  />
            <Route path="/Games" exact component={Games}/>
            <Route path="/About" exact component={About}/>
            <Route path='/TetrisGame' exact render={()=><TetrisGame tetrisUser={loggedInUser} />} />
            <Route path='/Minesweeper' exact render={()=><Minesweeper minesweeperUser={loggedInUser} />} />
            <Route path='/Snake' exact render={()=><SnakeGame snakeUser={loggedInUser} />} />
            <Route path='/TicTacToe' exact component={Game} />
            <Route path='/Login' exact component={LoginButton} />
        </Switch>
      </UserContext.Provider>
      <div className="body">
        Hello World
      </div>
    </div>
  );
}

export default App;

export { UserContext };
