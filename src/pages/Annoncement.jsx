import React from "react";
import Header from "../components/fetaures/Header";
import FloorManage from "../components/fetaures/FloorManage";

const Announcement = () => {
  return (
    <div className="page-parent dashboardPage-parent">
       <h2>Announcement</h2>
      <Header content="Your Playlist Hub" subcontent="Manage Playlists and Recordings" />
      <FloorManage/>
    </div>
  );
};

export default Announcement;
