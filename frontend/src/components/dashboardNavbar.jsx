import React, { Component } from "react";
import { ReactComponent as PlusSign } from "../assets/PlusSign.svg";
import { ReactComponent as DefaultProfile } from "../assets/defaultProfile.svg";

class DashboardNavbar extends Component {
  render() {
    return (
      <nav className="dashboard-navbar-container">
        <div className="dashboard-navbar">
          <a href="http://localhost:3000" className="dashboard-logo">
            CLASSBOOSTER
          </a>
          <button
            className="dashboard-plus"
            onClick={() => this.props.toggleEditClassnamePopup(-1)}
          >
            {<PlusSign />}
          </button>
          <button
            id="dashboard-profile"
            onClick={this.props.toggleProfileDropdown}
          >
            {<DefaultProfile />}
          </button>
          {this.props.profileDropdownVisible && (
            <ProfileDropdown></ProfileDropdown>
          )}
        </div>
      </nav>
    );
  }
}

export default DashboardNavbar;

function ProfileDropdown() {
  return (
    <div id="dashboard-profile-dropdown">
      <link
        href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <a href="#" id="dashboard-account-link">
        Account
      </a>
      <a href="#" id="dashboard-support-link">
        Support
      </a>
    </div>
  );
}
