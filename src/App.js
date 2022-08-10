import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import BooksBlock from "./components/BooksBlock";
import books from "./assets/img/books.json";

console.log(books);

function App() {
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
              books.map((obj) => (
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
