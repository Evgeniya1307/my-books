import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import BooksBlock from "../components/BooksBlock";
import Skeleton from "../components/BooksBlock/Skeleton";

const Home = () => {
  //состояния для пицц
  const [items, setItems] = React.useState([]); // изначально пустой массив

  //будет понятно что отобразить скелетон или пиццу
  const [isLoading, setIsLoading] = React.useState(true);
  //стейт для категории и сортировки
  const [categoryId, setCategoryId] = React.useState(0); //эти параметры передам на бэкенд хранят в себе категорию и фу-ию которая меняет эту категорию
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true)//перед загрузкой
    fetch("https://62f392d2a84d8c968126cc02.mockapi.io/items?category=" + categoryId)//сначала ? потом параметры если 1парметр то 1 амперсанд
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      }); 
    window.scrollTo(0, 0);
  }, [categoryId]);//если поменяется делай запрос на бэкенд
 
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />{/*значение передала в value и фу-ия будет менять стейт при нажатии  */}
        {/*прокидываю пропс этого компонента вытащить данные */}
        <Sort value ={sortType} onChangeSort={(i)=>setSortType(i)}/>{/*сортировка по по полуряности */}
      </div>
      <h2 className="content__title">Все книги</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map(() => <Skeleton />)
          : items.map((obj) => <BooksBlock key={obj.id} {...obj} />)}
        {/*если идёт загрузка создай массив из (6) и замени их .map на скелетон иначе если загрузка не идёт то рендери items.map((obj) =><BooksBlock key ={obj.id} {...obj} возьми объект и его отрендери */}
        {/*если тру покажи скелетон спред сократил скопировал весь obj если пропсы с точно таким названием */}
      </div>
    </div>
  );
};

export default Home;
