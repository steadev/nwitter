// import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { fAuth } from "../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(fAuth);
    navigate("/");
  }
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}

export default Profile;