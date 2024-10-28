import React, { useEffect, useState } from "react";
import "../Styles/recentFolders.css";
import { folderListApi } from "../Services/Allapi";

function RecentFolders() {
  //
  const FolderClick = () => {
    console.log("userclicked");
  };
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const response = await folderListApi();
      console.log(response.data);
      console.log("folder list called");

      setFolderList(response.data);
      console.log(folderList);
    };
    fetchFolders();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-3 recent-folders mx-auto ">
        <h2>Recent Folders</h2>
        <div id="recFolderRow" className="row ">
          {folderList.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 my-1">
              <div className="folder ">
                <div className="div d-flex align-items-center justify-content-start">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
              
        //   <div className="col-lg-3 col-md-6 my-1">
        //   <div className="folder"></div>
        // </div>
        // <div className="col-lg-3 col-md-6 my-1 ">
        //   <div className="folder"></div>
        // </div>
        // <div className="col-lg-3 col-md-6 my-1 ">
        //   <div className="folder"></div>
        // </div>
          )
          )}
        
        </div>
      </div>
    </div>
  );
}

export default RecentFolders;
