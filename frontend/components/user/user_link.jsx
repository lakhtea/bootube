import React from "react";
import Dropdown from "./dropdown";

class UserLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownToggled: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ dropdownToggled: !this.state.dropdownToggled });
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="user-link">
        <button onClick={this.toggleDropdown}>
          {currentUser?.username[0].toUpperCase()}
        </button>
        <Dropdown logout={logout} currentUser={currentUser} />
      </div>
    );
  }
}

export default UserLink;
