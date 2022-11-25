import React from "react";
import { useParams } from "react-router";
import axios from "axios";

//инфа пиццы
const FullBooks = () => {
  const { books, setBooks } = React.useState();
  const { id } = useParams();; //возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены <Route path>

  //запрос по id
  React.useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await axios.get(
          "https://62f392d2a84d8c968126cc02.mockapi.io/items/" + id
        );
        setBooks(data);
      } catch (error) {
        alert('"Ошибка при получении книг"');
      }
    }
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <img src= '' alt="id" />
      <h2>{id}</h2>
      <h4></h4>
    </div>
  );
};

export default FullBooks;
