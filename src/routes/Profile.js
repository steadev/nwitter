// import React from "react";
import { signOut, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fAuth } from "../firebase";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName ?? '');
  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(fAuth);
    navigate("/");
  }

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(fAuth.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  )
}

export default Profile;