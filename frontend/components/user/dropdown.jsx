import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";

const Dropdown = ({ currentUser, logout }) => {
  if (!currentUser) return null;
  return (
    <div className="dropdown">
      <div className="user-card">
        <Avatar
          id={currentUser.id}
          username={currentUser.username}
          avatar={currentUser.avatarUrl}
        ></Avatar>
        <div className="user-info">
          <h5>{currentUser?.username}</h5>
          <span>{currentUser?.email}</span>
        </div>
      </div>
      <div className="my-links">
        <Link to={`/channel/${currentUser.id}`}>
          <span className="material-icons">account_box</span>
          <span>Your Channel</span>
        </Link>
        <a target="_blank" href="https://github.com/lakhtea">
          <i className="fab fa-github"></i>
          <span>Github</span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lakhte-agha-1909b11b2"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a target="_blank" href="http://lakhteagha.com/">
          <span className="material-icons">language</span>
          <span>Website</span>
        </a>
        <Link onClick={logout} to="">
          <span className="material-icons">logout</span>
          <span>Sign out</span>
        </Link>
      </div>
      {/* <div className="dummy-links">
        <Link to="">
          <span className="material-icons">brightness_4</span>
          <span>Appearance: Device theme</span>
        </Link>
        <Link to="">
          <span className="material-icons">translate</span>
          <span>Language: English</span>
        </Link>
        <Link to="">
          <span className="material-icons">room</span>
          <span>Location: United States</span>
        </Link>
        <Link to="">
          <span className="material-icons">settings</span>
          <span>Settings</span>
        </Link>
        <Link to="">
          <span className="material-icons">admin_panel_settings</span>
          <span>Your data in bootube</span>
        </Link>
        <Link to="">
          <span className="material-icons">help</span>
          <span>Help</span>
        </Link>
        <Link to="">
          <span className="material-icons">feedback</span>
          <span>Send feedback</span>
        </Link>
        <Link to="">
          <span className="material-icons">keyboard</span>
          <span>Keyboard shortcuts</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Dropdown;
