import React from "react";
import basestyle from "../Base.module.css";
import Fibonacci from "../Main.js/Fibonacci";
const Profile = ({ setUserState, username }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "white", marginLeft: "75px" }}>
        Welcome {username} !!
      </h1>
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
      <Fibonacci />
    </div>
  );
};
export default Profile;
