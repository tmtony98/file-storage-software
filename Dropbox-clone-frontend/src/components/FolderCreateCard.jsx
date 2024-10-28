import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import axiosInstance from "../Services/axiosInstance";
import { commonAPI } from "../Services/commonAPI";
import axios from "axios";
import { folderCreationApi } from "../Services/Allapi";

function FolderCreateCard() {
  //

  const [folderName, setFolderName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputData = (e) => {
    // e.preventDefault()
    setFolderName(e.target.value);
  };

  const handleCreateFolder = async () => {
    const CreationDate = new Date();
    console.log(CreationDate);
    // console.log(folderName);
    const res = await folderCreationApi({
      Foldername: folderName,
      CreatedDate: CreationDate,
    });
    console.log(res.status);
    if (res.status == 200) {
      console.log("file created successfully");
      handleClose();
    } else if (res.status == 401) {
      alert("unauthorired user request! please login")
      console.log("unauthorired user request! please login");
    } else if (res.status == 500) {
      alert("server error")
      console.log("server error");
    } 
  };

  return (
    <>
      <Button
        style={{ position: "relative", width: "100%", height: "100%" }}
        variant="primary"
        onClick={handleShow}
      >
        Create Folder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleInputData}
                placeholder="Folder Name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateFolder}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FolderCreateCard;
