import { commonAPI } from "./commonAPI";
const BaseURL = "http://localhost:5000";

// register api
export const registerApi = async (user) => {
  return await commonAPI("POST", `${BaseURL}/user/register`, user, "");
};

//login api
export const loginApi = async (user) => {
  return await commonAPI("POST", `${BaseURL}/user/login`, user, "");
};
//api to create folders
export const folderCreationApi = async (folderName) => {
  return await commonAPI("POST", `${BaseURL}/createfolder`, folderName, "");
};

//folder list Api

export const folderListApi = async () => {
  return await commonAPI("GET", `${BaseURL}/user/folders`, "" );
};

