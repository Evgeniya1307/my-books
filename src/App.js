import React from "react";
import { Routes, Route } from "react-router";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


function App() {
//стейт хранящий поле поска
  const  [searchValue, setSearchValue] =React.useState('')// инпут без ничего

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />{/*передаю данные */} 
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/*будет рендерить по пути гавному Home */}
            <Route patch="/cart" element={<Cart />} />
            <Route patch="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  ); 
}

export default App;
