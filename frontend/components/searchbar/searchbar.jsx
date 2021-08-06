import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);

    this.props
      .onTermSubmitUser(this.state.term)
      .then(() =>
        this.props.history.push(`/results?search_query=${this.state.term}`)
      );
  }
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <div className="search">
            <input
              className="search-bar"
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
              placeholder="Search"
            />
          </div>
          <button className="search-button">
            <span className="material-icons">search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
