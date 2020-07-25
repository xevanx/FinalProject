import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../pages/Login/LoginButton";
import LogoutButton from "../pages/Login/LogoutButton";
import UserInfo from "./UserInfo";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button  class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            href="/profile"
          >
              Profile
            <UserInfo />
          </button>
          <div>
            <LogoutButton />
          </div>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        !PLAY
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        href="/"
      >
        <span class="navbar-toggler-icon">Home</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/Scoreboard">
              Scoreboard<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/Games">
                Games
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/About">
              About
            </a>
          </li>
          <AuthNav />
        </ul>
      </div>
    </nav>

    // <header style={headerStyle} class="navbar">
    //     <nav>
    //         <h1>!PLAY</h1>
    //         <ul className='nav-links'>
    //         <Link to="/" style={linkStyle}>Home</Link> | <Link to="/Scoreboard" style={linkStyle}>Scoreboard</Link> | <Link to='/games' style={linkStyle}>Games</Link> | <Link to='/about' style={linkStyle}>About</Link> | <AuthNav />
    //         </ul>
    //     </nav>
    // </header>
  );
};

// const linkStyle = {
//   color: "#fff",
//   textAlign: "center",
//   textDecoration: "none",
// };

// const headerStyle = {
//   background: "#333",
//   color: "#fff",
//   textAlign: "center",
//   padding: "10px",
// };

export default Header;
