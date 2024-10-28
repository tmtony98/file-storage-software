import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./assets/scss/style.scss";
import App from "./App";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Card } from "reactstrap";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Profile from "./Pages/Profile";
  

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Suspense >
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/profile" Component={Profile}></Route>
        {/* <Route path="/card" Component={SalesChart}></Route> */}
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>


      </Routes>
      </BrowserRouter>
  </Suspense>,

  // document.getElementById("root")
);

