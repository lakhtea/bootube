import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/login">Sign In</Link>
    </div>
  );
  return (
    <nav className="main-nav">
      <i className="fas fa-bars"></i>
      <h1>
        <Link to="/">
          <img className="logo" src={window.bootubeUrl} alt="bootube" />
        </Link>
      </h1>

      <div className="search">
        <SearchBar />
        <i className="fas fa-search"></i>
      </div>

      <div className="nav-elements">
        <i className="fas fa-video"></i>
        <i className="fas fa-bell"></i>
        <div>{display}</div>
      </div>
    </nav>
  );
};
