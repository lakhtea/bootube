import React from "react";
import Dropdown from "./dropdown";
import onClickOutside from "react-onclickoutside";

class UserLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownToggled: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.userLinkRef = React.createRef();
  }

  handleClickOutside() {
    if (this.state.dropdownToggled)
      this.setState({ dropdownToggled: false }, () =>
        this.userLinkRef.current.classList.remove("toggled")
      );
  }

  render() {
    const { currentUser, logout } = this.props;
    console.log(this.state);
    return (
      <div ref={this.userLinkRef} className="user-link">
        <button
          onClick={() => {
            this.setState(
              {
                dropdownToggled: !this.state.dropdownToggled,
              },
              () => {
                if (this.state.dropdownToggled)
                  this.userLinkRef.current.classList.add("toggled");
                if (!this.state.dropdownToggled)
                  this.userLinkRef.current.classList.remove("toggled");
              }
            );
          }}
        >
          {currentUser?.username[0].toUpperCase()}
        </button>
        <Dropdown logout={logout} currentUser={currentUser} />
      </div>
    );
  }
}

export default onClickOutside(UserLink);
