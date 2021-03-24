import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";
import UserLink from "../user/user_link";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="elements">
      <Link to="/videos/new">
        <span className="material-icons">video_call</span>
      </Link>
      <span className="material-icons">notifications</span>
      <UserLink logout={logout} currentUser={currentUser} />
    </div>
  ) : (
    <div className="sign-in-container">
      <Link className="sign-in" to="/login">
        <span className="material-icons">account_circle</span>
        <span>SIGN IN</span>
      </Link>
    </div>
  );

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="burger">
          <span className="menu material-icons">menu</span>
          <h1>
            <Link to="/">bootube</Link>
          </h1>
        </div>

        <div>
          <SearchBar />
        </div>

        <div className="nav-elements">{display}</div>
      </nav>
    </div>
  );
};
