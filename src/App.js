import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BooksBlock from './components/BooksBlock';



function App() {
  return (
    <div className ="wrapper">
    <Header/>
      <div className ="content">
        <div className ="container">
          <div className ="content__top">
          <Categories/>
           <Sort/>
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
       <BooksBlock title = "Путешествия" price={500}/>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
