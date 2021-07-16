import React, { Component } from "react";
import {
  createLike,
  destroyLike,
  createDislike,
  destroyDislike,
} from "../../util/like_util";

export default class LikeDislike extends Component {
  render() {
    const { id, likes, dislikes } = this.props;
    return (
      <div className="like-container">
        <div className="likes-dislikes">
          <div className="likes-div" onClick={() => createLike("Video", id)}>
            <span className="material-icons">thumb_up_alt</span>
            <span className="likes">{likes}</span>
          </div>

          <div
            className="dislikes-div"
            onClick={() => createDislike("Video", id)}
          >
            <span className="material-icons">thumb_down_alt</span>0
            <span className="dislikes">{dislikes}</span>
          </div>
        </div>

        <div className="like-bar"></div>
      </div>
    );
  }
}
