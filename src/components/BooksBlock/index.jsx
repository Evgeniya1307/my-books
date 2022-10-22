import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice.js";

//массив для рендеринга
const typeNames = ["Рэйтинг ⭐⭐⭐⭐⭐", "Популярные (100)"];

function BooksBlock({ id, title, price, sizes, imageUrl, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find(obj => obj.id ===id)); //количество добавлений
  const [activeType, setActiveType] = React.useState('');
  const [activeSize, setActiveSize] = React.useState('');
  //проверка если в корзине нашёлся такой товар то вытаскиваю count
  const addedCount = cartItem ? cartItem.count : 0;
 
  const onClickAdd = () => {
    //сгенерирую товар который добавлять
    const item = {
      //в корзине ожидаю
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      sizes: sizes[activeSize],
     
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="books" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map(
              (
                type //проверка если activeType равен type тому что вернёт массив то будет active или ''
              ) => (
                <li
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={activeType === type ? "active" : ""}
                >
                  {typeNames[type]}
                </li>
              )
            )}
            {/*реакция при нажатии  на рэйтинг скачиваний */}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => {
                  setActiveSize(i);
                }}
                className={activeSize === i ? "active" : ""}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price}€</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
          {addedCount >0 && <i>{addedCount}</i>}{/*если >0 рендери правую часть  */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksBlock;

// const [booksCount, setBookscCount] = React.useState(0);
// const onClickAdd = () => {
//   setBookscCount(booksCount + 1);
// };
//состояния для выбора какого типа
