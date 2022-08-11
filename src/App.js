import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import BooksBlock from "./components/BooksBlock";



function App() {
  //состояния для пицц
  const [items, setItems]=React.useState([])// изначально пустой массив
  
  //пример запроса 
  fetch('https://62f392d2a84d8c968126cc02.mockapi.io/items')
  .then((res)=>{
    return res.json()
  })
  .then((arr)=>{
    setItems(arr)// делаю запросвозьми этот массив
  });


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
            {
              items.map((obj) => (
                <BooksBlock key={obj.id} {...obj} />
              )) //спред сократил скопировал весь obj если пропсы с точно таким названием
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
