import React from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from 'axios';
import { Link } from  'react-router-dom';

// function scoreboardData () {
//     const { user } = useAuth0();
//     const Data = [];
//     axios.post('http://localhost:3001/api/user', user)
//         .then( res => {
//             console.log(res.data)
//             Data.push(res.data)
//         });

//     return (
//     <h2>{Data}</h2>
//     )
// }

export class Scoreboard extends React.Component {
    state = {
        scoreboard: []
    }

    // async componentDidMount() {
    //     let storage = await new Storage().getData()

    //     this.setState({
    //         scoreboard: storage
    //     })
    // }

    render() {
        return (
            <div className="MinesweeperScore">
                <h1>Best of Minesweeper</h1>
                <ul>
                    {this.state.scoreboard.map((leader, key) => {
                        return <li key={key}>{leader}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Scoreboard;