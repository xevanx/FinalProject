import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../pages/Login/LoginButton'
import LogoutButton from '../pages/Login/LogoutButton'
import UserInfo from './UserInfo'



const AuthNav = () => {
        
    const { isAuthenticated } = useAuth0();

    return (
        <div>
        {isAuthenticated ? 
            <div className="dropdown">
                <button className="dropbtn">
                    <Link to='/profile' style={linkStyle}>Profile</Link>
                    <UserInfo />
                    </button>
                <div className="dropdown-content">
                    <LogoutButton />
                </div>
            </div> : <LoginButton />}
        </div>
    )
}

const Header = () => {
    return (
        <header style={headerStyle}>          
            <nav>
                <h1>!PLAY</h1>
                <ul className='nav-links'>
                <Link to="/" style={linkStyle}>Home</Link> | <Link to='/games' style={linkStyle}>Games</Link> | <Link to='/about' style={linkStyle}>About</Link> | <AuthNav />
                </ul>
            </nav>
        </header>
    )
}

const linkStyle = {
    color: "#fff",
    textAlign: 'center',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;