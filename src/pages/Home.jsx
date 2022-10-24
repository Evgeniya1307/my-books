import React from "react";
import { useDispatch, useSelector } from "react-redux";

import qs from "qs";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import BooksBlock from "../components/BooksBlock";
import Skeleton from "../components/BooksBlock/Skeleton";
import Pagination from "../Pagination";
import { SearchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../redux/slices/booksSlice"; 

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //вернёт в dispatch функцию которая меняет стейт
  const isSearch = React.useRef(false); //поиска пока нет
  const isMounted = React.useRef(false);
  
  const items = useSelector((state)=> state.books.items)
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  ); //вытаскиваю всё хранилище и категории и сорт

  
const { searchValue } = React.useContext(SearchContext); //создаю useContext  для вытаскивания данных как только изменения ппотом перерисовка
  //будет понятно что отобразить скелетон при загрузке или пиццу
  const [isLoading, setIsLoading] = React.useState(true); // при первом рендере true

  const onChangeCategory = React.useCallback((id) => {
    dispatch(setCategoryId(id)); //передала в диспатч  меняет категорию
  }, []);

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getBooks = async () => {
    setIsLoading(true); //перед загрузкой

    const sortBy = sort.sortProperty.replace("-", ""); //из свойства удали -
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"; // проверяй если в сортировке - если includes есть - то делать asc возрастанию иначе desc по убыванию
    const category = categoryId > 0 ? `category = ${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : ""; //для поиска по бэкенду

  try{//успешный ответ
   dispatch(fetchBooks({
    sortBy,
    order,
    category,
    search,
    currentPage
   }));
  } catch(error){//что то пошло нетак
    console.log('ERROR', error);
    alert('Ошибка получения книг');
  }finally{// выполнится независимо ошибка или успех
    setIsLoading(false);//загрузку надо завершить даже если не успешно
  }
  window.scrollTo(0,0);//Прокрутка документа
    };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      // если true(был первый рендер) то делать нижнюю инфу
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе
  React.useEffect(() => {
    if (window.location.search) {
      //если есть то парсить и превращать в объект
      const params = qs.parse(window.location.search.substring(1)); //с помощью qs парсинг, substring(убираю ?)
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      ); //пробежалась по кажд,св-ву в объекте и найти что есть в парамс sortProperty
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      //делаю проверку при первом рендере нужно ли отправлять запрос, если пришли параметры не отправлять ждать dispatch
      getBooks(); // если нет параметров то делаю запрос
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]); //если поменяется категория или сортировка делай запрос на бэкенд на получение новых книг

  const books = items.map((obj) => <BooksBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {/*значение передала в value и фу-ия будет менять стейт при нажатии  */}
        {/*прокидываю пропс этого компонента вытащить данные */}
        <Sort />
      </div>
      <h2 className="content__title">Все книги</h2>
      <div className="content__items">
        {isLoading ? skeletons : books}
        {/*если идёт загрузка создай массив из (6) и замени их .map на скелетон иначе если загрузка не идёт то рендери items.map((obj) =><BooksBlock key ={obj.id} {...obj} возьми объект и его отрендери */}
        {/*если тру покажи скелетон спред сократил скопировал весь obj если пропсы с точно таким названием */}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      {/*метод возращающий число */}
    </div>
  );
};

export default Home;

//const [categoryId, setCategoryId] = React.useState(0); //эти параметры передам на бэкенд хранят в себе категорию и фу-ию которая меняет эту категорию  //2 стейта для категории и сортировки
//const [currentPage, setCurrentPage] = React.useState(1);//стейт нумерации  страниц
// const [sortType, setSortType] = React.useState({
//sorType хр-ся объект в нём св-ва name,sortProperty он пере-ся в компонент выт-ся из велью
// name: "популярности", //соз-ла объект при первом открытии приложения выберется популярные
// sortProperty: "rating", // по умолчанию сортировка по рейтингу
//});
//состояния для пицц
 // const [items, setItems] = React.useState([]); // изначально пустой массив


//promise синхронный превращает в асинхронный чтобы в определённое время выполнить
//а async await превращает асинхронный в синхронный
