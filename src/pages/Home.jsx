import React from "react";
import { useDispatch, useSelector } from "react-redux";

import qs from "qs";

import {
  selectFilter,
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
import { fetchBooks, selectorBooksData } from "../redux/slices/booksSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //вернёт в dispatch функцию которая меняет стейт
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectorBooksData);//вытаскиваю данные
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter); //вытаскиваю всё хранилище и категории и сорт

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id)); //передала в диспатч  меняет категорию
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getBooks = async () => {
    const sortBy = sort.sortProperty.replace("-", ""); //из свойства удали -
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"; // проверяй если в сортировке - если includes есть - то делать asc возрастанию иначе desc по убыванию
    const category = categoryId > 0 ? `category = ${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : ""; //для поиска по бэкенду
    dispatch(
      fetchBooks({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0); //Прокрутка документа
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
      navigate(`/?${queryString}`);
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
    }
  }, []);

  // Если был первый рендер, то запрашиваем книги
  React.useEffect(() => {
    getBooks(); // если нет параметров то делаю запрос
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
      {status === "error" ? (
        <div className="content__error-info">
          <h2> Произошла ошибка 😕</h2>
          <p>К сожалению, Не удалось получить книги...</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : books}
        </div>
      )}

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
//будет понятно что отобразить скелетон при загрузке или пиццу
//const [isLoading, setIsLoading] = React.useState(true); // при первом рендере true

//promise синхронный превращает в асинхронный чтобы в определённое время выполнить
//а async await превращает асинхронный в синхронный
