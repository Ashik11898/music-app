import React from "react";
import Header from "../components/fetaures/Header";
import FloorManage from "../components/fetaures/FloorManage";

const DashboardPage = () => {
  return (
    <div className="page-parent dashboardPage-parent">
       <h2>dashboard</h2>
      <Header content="Your Playlist Hub" subcontent="Manage Playlists and Recordings" />
      <FloorManage/>
    </div>
  );
};

export default DashboardPage;
