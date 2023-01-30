import React from "react";
import { useParams } from "react-router";
import axios from "axios";

//инфа пиццы
const FullBooks = () => {
  const { books, setBooks } = React.useState();
  const { id } = useParams();; //returns an object of parameter key/value pairs from the existing URLs that were found by <pathpath>

  //запрос по id делаю
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
