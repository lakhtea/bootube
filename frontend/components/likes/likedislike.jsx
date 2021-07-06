import React, { Component } from "react";

export default class LikeDislike extends Component {
  render() {
    return (
      <div className="like-container">
        <div className="likes-dislikes">
          <div className="likes-div">
            <span className="material-icons">thumb_up_alt</span>
            <span className="likes">42</span>
          </div>

          <div className="dislikes-div">
            <span className="material-icons">thumb_down_alt</span>
            <span className="dislikes">3</span>
          </div>
        </div>

        <div className="like-bar"></div>
      </div>
    );
  }
}
