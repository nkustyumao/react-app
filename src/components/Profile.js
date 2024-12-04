import React from "react";
import Login from "./Login";
import NotLogin from "./NotLogin";
import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => state.user);
  console.log(state);
  return <>{state.profile.login ? <Login /> : <NotLogin />}</>;
};

export default Profile;
