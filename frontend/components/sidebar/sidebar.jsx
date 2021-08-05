import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
  };
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      github: false,
      linkedin: false,
      website: false,
    };
  }

  toggleActive(type) {
    this.setState({
      home: true,
      github: false,
      linkedin: false,
      website: false,
    });
    this.setState({ [type]: !this.state[type] });
  }

  render() {
    let sideBarWidth = { width: "72px" };
    if (this.props.sidebar) {
      sideBarWidth = { width: "240px" };
      return (
        <div style={sideBarWidth} className="sidebar-expanded">
          <Link
            className={`${this.state.home ? "active" : ""}`}
            onClick={() => this.toggleActive("home")}
            to="/"
          >
            <span className="material-icons">home</span>
            Home
          </Link>
          <a
            target="_blank"
            className={`${this.state.trending ? "active" : ""}`}
            onClick={() => this.toggleActive("github")}
            href="https://github.com/lakhtea"
          >
            <span>
              <i className="material-icons fab fa-github"></i>
            </span>
            Github
          </a>

          <a
            target="_blank"
            className={`${this.state.subs ? "active" : ""}`}
            onClick={() => this.toggleActive("linkedin")}
            href="https://www.linkedin.com/in/lakhte-agha-1909b11b2"
          >
            <span>
              <i className="fab fa-linkedin material-icons"></i>
            </span>
            LinkedIn
          </a>

          <a
            target="_blank"
            className={`${this.state.lib ? "active" : ""}`}
            onClick={() => this.toggleActive("website")}
            href="http://lakhteagha.com/"
          >
            <span className="material-icons">language</span>
            Website
          </a>
        </div>
      );
    }

    return (
      <div style={sideBarWidth} className="sidebar">
        <Link
          className={`${this.state.home ? "active" : ""}`}
          onClick={() => this.toggleActive("home")}
          to="/"
        >
          <span className="material-icons">home</span>
          Home
        </Link>

        <a
          target="_blank"
          className={`${this.state.trending ? "active" : ""}`}
          onClick={() => this.toggleActive("github")}
          href="https://github.com/lakhtea"
        >
          <span>
            <i className="material-icons fab fa-github"></i>
          </span>
          Github
        </a>

        <a
          target="_blank"
          className={`${this.state.subs ? "active" : ""}`}
          onClick={() => this.toggleActive("linkedin")}
          href="https://www.linkedin.com/in/lakhte-agha-1909b11b2"
        >
          <span>
            <i className="fab fa-linkedin material-icons"></i>
          </span>
          LinkedIn
        </a>

        <a
          target="_blank"
          className={`${this.state.lib ? "active" : ""}`}
          onClick={() => this.toggleActive("website")}
          href="http://lakhteagha.com/"
        >
          <span className="material-icons">language</span>
          Website
        </a>

        {/* <Link
          className={`${this.state.history ? "active" : ""}`}
          onClick={() => this.toggleActive("history")}
          to="/"
        >
          <span className="material-icons">history</span>
          History
        </Link> */}
      </div>
    );
  }
}

export default connect(mstp, null)(Sidebar);
