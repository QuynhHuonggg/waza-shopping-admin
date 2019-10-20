
import React, { Component } from "react";
import UserTab from './UserTab';

class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="user-table">
          <UserTab />
        </div>
      </div>
    );
  }
}

export default User;

