import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

//Auth0 is whats linking Facebook and Google as the medium for logging in. 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Link to="/profile" onClick={() => loginWithRedirect()} 
      style={linkStyle}>
        Log In
    </Link>;
};

const linkStyle = {
  color: "#fff",
  textAlign: 'center',
  textDecoration: 'none'
}

export default LoginButton;
