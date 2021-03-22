import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      trending: false,
      subs: false,
      lib: false,
      history: false,
    };
  }

  toggleActive(type) {
    this.setState({
      home: false,
      trending: false,
      subs: false,
      lib: false,
      history: false,
    });
    this.setState({ [type]: !this.state[type] });
  }

  render() {
    return (
      <div className="sidebar">
        <Link
          className={`${this.state.home ? "active" : ""}`}
          onClick={() => this.toggleActive("home")}
          to="/"
        >
          <span className="material-icons">home</span>
          Home
        </Link>

        <Link
          className={`${this.state.trending ? "active" : ""}`}
          onClick={() => this.toggleActive("trending")}
          to="/"
        >
          <span className="material-icons">local_fire_department</span>
          Trending
        </Link>

        <Link
          className={`${this.state.subs ? "active" : ""}`}
          onClick={() => this.toggleActive("subs")}
          to="/"
        >
          <span className="material-icons">subscriptions</span>
          Subscriptions
        </Link>

        <Link
          className={`${this.state.lib ? "active" : ""}`}
          onClick={() => this.toggleActive("lib")}
          to="/"
        >
          <span className="material-icons">video_library</span>
          Library
        </Link>

        <Link
          className={`${this.state.history ? "active" : ""}`}
          onClick={() => this.toggleActive("history")}
          to="/"
        >
          <span className="material-icons">history</span>
          History
        </Link>
      </div>
    );
  }
}

export default Sidebar;
