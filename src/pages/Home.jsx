import React from 'react'

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import BooksBlock from "../components/BooksBlock";
import Skeleton from "../components/BooksBlock/Skeleton";


const Home = () => {
  //состояния для пицц
  const [items, setItems]=React.useState([])// изначально пустой массив
 
 //будет понятно что отобразить скелетон или пиццу
  const[isLoading, setIsLoading] = React.useState()

   React.useEffect(()=>{
    fetch('https://62f392d2a84d8c968126cc02.mockapi.io/items')
   .then((res)=> res.json())
   .then((arr)=>{
    setItems(arr);
    setIsLoading(false);
   })
  }, []);
  
    return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map(()=> <Skeleton/> ) : items.map((obj) =><BooksBlock key ={obj.id} {...obj} />)}{/*если идёт загрузка создай массив из (6) и замени их .map на скелетон иначе если загрузка не идёт то рендери items.map((obj) =><BooksBlock key ={obj.id} {...obj} возьми объект и его отрендери */}
 {/*если тру покажи скелетон спред сократил скопировал весь obj если пропсы с точно таким названием */}
          </div>
    </>
  );
};

export default Home;
