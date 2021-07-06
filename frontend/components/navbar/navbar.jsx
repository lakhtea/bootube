import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../searchbar/searchbar_container";
import UserLink from "../user/user_link";

export default ({ currentUser, logout, fetchVideos }) => {
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
          {/* <div className="burgerr"> */}
          <button className="">
            <span className="menu material-icons">
              menu
              {/* <div className="menu-bubble"></div> */}
            </span>
          </button>
          {/* </div> */}

          <h1>
            <Link onClick={fetchVideos} to="/">
              bootube
            </Link>
          </h1>
        </div>

        <div>
          <SearchBarContainer />
        </div>

        <div className="nav-elements">{display}</div>
      </nav>
    </div>
  );
};
