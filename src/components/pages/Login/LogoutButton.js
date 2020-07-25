import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <Link
            onClick={()=> logout()}
            to="/"
            id="qsLogoutBtn"
            style={linkStyle}
            className="btn-margin">
                Log Out
            </Link>
    )
}

const linkStyle = {
    color: "black",
    textAlign: 'center',
    textDecoration: 'none'
  }
  

export default LogoutButton