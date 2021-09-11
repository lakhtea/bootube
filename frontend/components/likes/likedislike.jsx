import React, { Component } from "react";

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.likeObject = {
      likeable_type: "Video",
      likeable_id: this.props.id,
      user_id: this.props.currentUser,
    };
    this.state = {
      status: this.props.liked?.category,
      like: this.props.liked,
      likes: this.props.likes,
      dislikes: this.props.dislikes,
    };
  }

  render() {
    const { like, unlike, liked, currentUser } = this.props;
    const likedStyle =
      this.state.like?.category === "Like" ? { color: "#3da6ff" } : null;
    const dislikedStyle =
      this.state.like?.category === "Dislike" ? { color: "#3da6ff" } : null;
    const likebarStyle = {
      backgroundColor: this.state.like ? "#3da6ff" : null,
      width: `${
        (this.state.likes / (this.state.likes + this.state.dislikes)) * 100
      }%`,
    };

    return (
      <div className="like-container">
        <div className="likes-dislikes">
          <div
            className="likes-div"
            style={likedStyle}
            onClick={() => {
              if (!currentUser) this.props.history.push("/login");
              if (this.state.status === "Dislike") {
                unlike(liked)
                  .then(() => like({ ...this.likeObject, category: "Like" }))
                  .then(() =>
                    this.setState({
                      status: "Like",
                      like: { ...this.likeObject, category: "Like" },
                      likes: this.state.likes + 1,
                      dislikes: this.state.dislikes - 1,
                    })
                  );
              } else if (this.state.status === "Like") {
                unlike(liked).then(() =>
                  this.setState({
                    status: null,
                    like: null,
                    likes: this.state.likes - 1,
                  })
                );
              } else {
                like({ ...this.likeObject, category: "Like" }).then(() =>
                  this.setState({
                    status: "Like",
                    like: { ...this.likeObject, category: "Like" },
                    likes: this.state.likes + 1,
                  })
                );
              }
            }}
          >
            <span className="material-icons">thumb_up_alt</span>
            <span className="likes">{this.state.likes}</span>
          </div>

          <div
            className="dislikes-div"
            style={dislikedStyle}
            onClick={() => {
              if (!currentUser) this.props.history.push("/login");
              if (this.state.status === "Like") {
                unlike(liked)
                  .then(() => like({ ...this.likeObject, category: "Dislike" }))
                  .then(() =>
                    this.setState({
                      status: "Dislike",
                      like: { ...this.likeObject, category: "Dislike" },
                      dislikes: this.state.dislikes + 1,
                      likes: this.state.likes - 1,
                    })
                  );
              } else if (this.state.status === "Dislike") {
                unlike(liked).then(() =>
                  this.setState({
                    status: null,
                    like: null,
                    dislikes: this.state.dislikes - 1,
                  })
                );
              } else {
                like({ ...this.likeObject, category: "Dislike" }).then(() =>
                  this.setState({
                    status: "Dislike",
                    like: {
                      ...this.likeObject,
                      category: "Dislike",
                    },
                    dislikes: this.state.dislikes + 1,
                  })
                );
              }
            }}
          >
            <span className="material-icons">thumb_down_alt</span>
            <span className="dislikes">{this.state.dislikes}</span>
          </div>
        </div>
        <div className="lowerbar">
          <div style={likebarStyle} className="like-bar"></div>
        </div>
      </div>
    );
  }
}
