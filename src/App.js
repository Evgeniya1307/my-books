import React from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullBooks from "./pages/FullBooks";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*передаю значения */}
            {/*будет рендерить по пути гавному Home */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/books/:id" element={<FullBooks />} /> {/*какую именно пиццу открывать*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
