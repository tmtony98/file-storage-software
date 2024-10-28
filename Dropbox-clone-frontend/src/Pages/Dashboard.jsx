import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container } from "reactstrap";
import ProjectTables from "../components/FilesTable";
import Topcards from "../components/Topcards";
import FilesTable from "../components/FilesTable"
import { Row, Col } from "react-bootstrap";
import RecentFolders from "../components/RecentFolders";

function Dashboard() {
  return (
    <>
      <div className="pageWrapper d-lg-flex">
        {/***----Sidebar----****/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Header />
          {/***-----Middle Content-----***/}
          <Container className="p-4  wrapper">
            {/* <TopCards/> */}
            <Topcards />
            <RecentFolders/>
            <ProjectTables />
          </Container>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
