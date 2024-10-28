import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../Services/axiosInstance";

const ProjectTables = () => {
  //
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await axiosInstance.get("/api/files");
      setFiles(response.data);
      console.log(files);
    };

    fetchFiles();  
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="p-2 h3">My files</CardTitle>
          {/* <CardSubtitle className="mb-1 text-muted" tag="h6">
            Overview 
          </CardSubtitle>*/}

          <Table className="no-wrap mt-2 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>File Name</th>
                {/* <th>type</th> */}
                <th>access</th>
                <th>size</th>
                <th>created</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="">
                        <h6 className="mb-0 ">{file.key}</h6>
                        {/* <span className="text-muted">{file.email}</span> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                      </a>
                    }
                  </td>

                  <td>{file.size / 102400} Mb</td>
                  <td>{file.LastModified}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
