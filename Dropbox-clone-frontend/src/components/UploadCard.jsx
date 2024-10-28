import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
// import "./styles.css";
import { Hidden } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../Services/axiosInstance';

function UploadCard() {
  //
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    setFile(e.target.files[0]); // Assuming single file upload
    if (file) {
      const formData = new FormData();
      formData.append('myFile', file);
      console.log(formData);
      try { const response = await axiosInstance.post("upload", formData, {
          headers: { "Content-Type": "multipart/form-data" ,},
        });
       console.log(response);
      //  console.log(token);
       if(response.status==200){
       // alert("File uploaded Successfully")
       toast.success('File Uploaded Successfully!',  {
        position: "top-right"
      })
      
       }else{
        toast.error('error! occured Try again');
       }
        
      } catch (err) {
        console.log(err);

      }
    }
  };
  // const [file, setFile] = useState("");

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   console.log(file[0]);
  //   setFile(e.target.files);
  //   try {
  //     axios
  //       .post("http://localhost:5000/upload", file, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
     <ToastContainer />
     
       
      
       
          <Dropdown
            className="custom-dropdown-toggle"
            style={{ height: "80px", width: "100%" }}
          >
            <Dropdown.Toggle
              className="custom-dropdown-toggle "
              style={{
                height: "100%",
                width: "100%",
                boxShadow: "none",
              }}
              id="dropdown-basic"
            >
              Upload File
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "220px" }}>
              <Dropdown.Item href="#/action-1">
                <label for="files" class="btn">
                  Select File
                </label>
         
                <input
                  onChange={handleUpload}
                  name="myFile"
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                />
              </Dropdown.Item>
              {/* <Dropdown.Item >
              <label for="folder" class="btn">
                  Select Folder
                </label>
              <input
        type="folder"
        webkitdirectory="true"
        directory="true"
        multiple
        onChange={handleUpload}
        style={{ visibility: "hidden" }}
      />
              </Dropdown.Item>
             */}

            </Dropdown.Menu>
          </Dropdown>
        
    </>
  );
}

export default UploadCard;
