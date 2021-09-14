import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTrending } from "../../actions/library_actions";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
  };
};

const mdtp = (dispatch) => {
  return {
    trending: () => dispatch(getTrending()),
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
      trending: false,
    };
  }

  toggleActive(type) {
    this.setState({
      home: false,
      github: false,
      linkedin: false,
      website: false,
      trending: false,
    });
    this.setState({ [type]: !this.state[type] });
  }

  render() {
    const { trending } = this.props;
    if (this.props.sidebar) {
      return (
        <div className="sidebar-expanded">
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
            className={`${this.state.github ? "active" : ""}`}
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
            className={`${this.state.linkedin ? "active" : ""}`}
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
            className={`${this.state.website ? "active" : ""}`}
            onClick={() => this.toggleActive("website")}
            href="http://lakhteagha.com/"
          >
            <span className="material-icons">language</span>
            Website
          </a>
          <Link
            className={`${this.state.trending ? "active" : ""}`}
            onClick={() => {
              this.toggleActive("trending");
              trending();
            }}
            to="/trending"
          >
            <span className="material-icons">whatshot</span>
            Trending
          </Link>
        </div>
      );
    }

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

        <a
          target="_blank"
          className={`${this.state.github ? "active" : ""}`}
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
          className={`${this.state.linkedin ? "active" : ""}`}
          onClick={() => this.toggleActive("linkedin")}
          href="https://www.linkedin.com/in/lakhte-agha-1909b11b2"
        >
          <span className>
            <i className="fab fa-linkedin material-icons"></i>
          </span>
          LinkedIn
        </a>

        <a
          target="_blank"
          className={`${this.state.website ? "active" : ""}`}
          onClick={() => this.toggleActive("website")}
          href="http://lakhteagha.com/"
        >
          <span className="material-icons">language</span>
          Website
        </a>
        <Link
          className={`${this.state.trending ? "active" : ""}`}
          onClick={() => {
            this.toggleActive("trending");
            trending();
          }}
          to="/trending"
        >
          <span className="material-icons">whatshot</span>
          Trending
        </Link>
      </div>
    );
  }
}

export default connect(mstp, mdtp)(Sidebar);
