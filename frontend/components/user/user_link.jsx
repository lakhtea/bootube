import React from "react";
import Dropdown from "./dropdown";

class UserLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownToggled: false };

    this.userLinkRef = React.createRef();
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
                // if (this.state.dropdownToggled)
                this.userLinkRef.current.classList.toggle("toggled");
                // if (!this.state.dropdownToggled)
                // this.userLinkRef.current.classList.remove("toggled");
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

export default UserLink;
