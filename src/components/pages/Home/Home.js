import React, {  useContext } from 'react'
// import { UserContext } from '../../../UserContext'


export function Home () {
    const msg  = "Hello World"
    // useContext(UserContext);

    return <h2>{msg}</h2>
}

export default Home;