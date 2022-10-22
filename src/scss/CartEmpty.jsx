import React from 'react'
import cartEmptyImg from "../assets/img/cestas-plastico-compra-cestas-vacias-supermercado-rosa-azul-viernes-negro-concepto-venta_99272-4570.webp"
import { Link } from 'react-router-dom';
const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы не выбрали ещё книгу.
            <br />
            Для того, чтобы заказать книгу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      );
    };

export default CartEmpty
