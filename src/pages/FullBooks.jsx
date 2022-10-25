import React from "react";
import { useParams } from "react-router";
import axios from "axios";

//инфа пиццы
const FullBooks = () => {
  const { books, setBooks } = React.useState();
  const { id } = useParams(); //возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены <Route path>

  //запрос по id книг
  React.useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await axios.get(
          "https://62f392d2a84d8c968126cc02.mockapi.io/items/" + id
        );
        setBooks(data);
      } catch (error) {
        alert("Ошибка при получении книг");
      }
    }
  }, []);

  return (
    <div className="container">
      <img src="" />
      <h2>{id}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pellentesque tincidunt interdum.
      </p>
      <h4>250 $</h4>
    </div>
  );
};

export default FullBooks;
