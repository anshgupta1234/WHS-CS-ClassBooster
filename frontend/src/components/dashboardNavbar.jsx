import React, { Component } from "react";
import { ReactComponent as PlusSign } from "../assets/PlusSign.svg";
import { ReactComponent as DefaultProfile } from "../assets/defaultProfile.svg";
import {Link} from "react-router-dom"

class DashboardNavbar extends Component {
  render() {
    return (
      <nav className="dashboard-navbar-container">
        <div className="dashboard-navbar">
          <Link to="/landing" className="dashboard-logo">CLASSBOOSTER</Link>
          <button
            className="dashboard-plus"
            onClick={() => this.props.toggleRenameClassroomPopup(-1)}
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
      <a href="mailto:classbooster.whs@gmail.com" id="dashboard-support-link">
        Support
      </a>
    </div>
  );
}
