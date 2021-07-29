import React, { Component } from "react";

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeable_type: "Video",
      likeable_id: this.props.id,
      user_id: this.props.currentUser,
    };
  }

  render() {
    const { id, like, unlike, liked } = this.props;

    const likedStyle = { color: "#909090" };
    const dislikedStyle = { color: "#909090" };

    // if (this.props.liked || this.state.liked) {
    //   likedStyle.color = "blue";
    // }

    // if (this.props.disliked || this.state.disliked) {
    //   dislikedStyle.color = "blue";
    // }
    return (
      <div className="like-container">
        <div className="likes-dislikes">
          <div
            className="likes-div"
            onClick={() => {
              like({ ...this.state, category: "Like" });
            }}
          >
            <span style={likedStyle} className="material-icons">
              thumb_up_alt
            </span>
            <span style={likedStyle} className="likes"></span>
          </div>

          <div
            className="dislikes-div"
            onClick={() => {
              like({ ...this.state, category: "Dislike" });
            }}
          >
            <span style={dislikedStyle} className="material-icons">
              thumb_down_alt
            </span>
            <span style={dislikedStyle} className="dislikes"></span>
          </div>
        </div>

        <div className="like-bar"></div>
      </div>
    );
  }
}
