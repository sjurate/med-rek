import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Sidebar className="navigation" />
            <Header className="header" />
            <div className="page">
              <Routes>
                <Route path="/" element={<Home className="home" />}></Route>
                <Route path="/medrek/main" element={<Main />}></Route>
                <Route path="/medrek/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer className="footer" />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
