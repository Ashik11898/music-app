import React from "react";
import { ProfileList } from "../components/minicomponents/atom";
import { PROFILE_CONSTANTS } from  "../utils/profile_constants";
import EditProfile from "../components/fetaures/EditProfile";

const Profile = () => {
  const PAGE_NAME = Object.keys(PROFILE_CONSTANTS)[0] 
  return (
    <div className="page-parent profilePage-parent">
      <EditProfile/>
      <h2>{PAGE_NAME}</h2>
      <ProfileList data={PROFILE_CONSTANTS} />
    </div>
  );
};

export default Profile;
