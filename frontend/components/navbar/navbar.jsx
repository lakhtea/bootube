import React, { useRef, useState } from "react";
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
  const burgerRef = useRef();
  const navElements = useRef();
  const searchIconRef = useRef();
  const arrowRef = useRef();
  const searchBarRef = useRef();

  if (
    ownProps.location.pathname === "/login" ||
    ownProps.location.pathname === "/signup"
  )
    return null;

  const hideElements = () => {
    burgerRef.current.setAttribute("id", "hidden-nav");
    navElements.current.setAttribute("id", "hidden-nav");
    searchIconRef.current.setAttribute("id", "hidden-nav");
    arrowRef.current.removeAttribute("id");
    searchBarRef.current.removeAttribute("id");
  };

  const revealElements = () => {
    burgerRef.current.removeAttribute("id");
    navElements.current.removeAttribute("id");
    searchIconRef.current.removeAttribute("id");
    arrowRef.current.setAttribute("id", "hidden-nav");
    searchBarRef.current.setAttribute("id", "hidden-nav");
  };

  const display = currentUser ? (
    <div className="elements">
      <button ref={searchIconRef} onClick={hideElements} className="mq-search">
        <span className="material-icons">search</span>
      </button>
      <div onClick={() => uploadModal(true)}>
        <span className="camcorder material-icons">video_call</span>
      </div>
      <UserLink logout={logout} currentUser={currentUser} />
    </div>
  ) : (
    <div className="sign-in-container">
      <button ref={searchIconRef} onClick={hideElements} className="mq-search">
        <span className="material-icons">search</span>
      </button>
      <Link className="sign-in" to="/login">
        <span className="material-icons">account_circle</span>
        <span>SIGN IN</span>
      </Link>
    </div>
  );

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div ref={burgerRef} className="burger">
          <button onClick={toggleSideBar} className="">
            <span className="menu material-icons">menu</span>
          </button>

          <h1>
            <Link className="bootube-logo" onClick={fetchVideos} to="/">
              bootube
            </Link>
          </h1>
        </div>

        <div
          ref={arrowRef}
          id="hidden-nav"
          className="back-button mq-search"
          onClick={revealElements}
        >
          <span className="material-icons">arrow_back</span>
        </div>

        <SearchBarContainer myRef={searchBarRef} />

        <div ref={navElements} className="nav-elements">
          {display}
        </div>
      </nav>
    </div>
  );
};
