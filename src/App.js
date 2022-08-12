import React from "react";
import { Routes, Route } from "react-router";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";





function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Routes> 
        <Route path="/" element={<Home/>} /> {/*будет рендерить по пути гавному Home */}
        <Route pattch = "/not-found" element={<NotFound />} />
        </Routes>
    
     
        </div>
      </div>
    </div>
  );
}

export default App;
