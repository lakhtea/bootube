import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../searchbar/searchbar_container";
import UserLink from "../user/user_link";

export default ({
  ownProps,
  currentUser,
  logout,
  fetchVideos,
  toggleSideBar,
  uploadModal,
}) => {
  if (
    ownProps.location.pathname === "/login" ||
    ownProps.location.pathname === "/signup"
  )
    return null;
  const display = currentUser ? (
    <div className="elements">
      <div onClick={() => uploadModal(true)}>
        <span className="material-icons">video_call</span>
      </div>
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
          <button onClick={toggleSideBar} className="">
            <span className="menu material-icons">menu</span>
          </button>

          <h1>
            <Link className="bootube-logo" onClick={fetchVideos} to="/">
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
