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

    // this.props.onTermSubmit(this.state.term);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search-bar"
            type="text"
            onChange={this.onInputChange}
            value={this.state.term}
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
