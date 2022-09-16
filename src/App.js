import React from "react";
import { Routes, Route } from "react-router";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

//создаю контекст
export const SearchContext = React.createContext();

function App() {
  //стейт хранящий поле поска
  const [searchValue, setSearchValue] = React.useState(""); // инпут без ничего

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        {" "}
        {/* есть контекст обернула приложение передала значение которое оно в себе хранит*/}
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/*передаю значения */}
              {/*будет рендерить по пути гавному Home */}
              <Route patch="/cart" element={<Cart />} />
              <Route patch="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
