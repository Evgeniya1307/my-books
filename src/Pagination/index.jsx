import React from "react";
import ReactPaginate from "react-paginate";


import styles from ".//Pagination.module.scss";

const Pagination = ({currentPage, onChangePage}) => { 
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">" //стрелки назад вперёд
      onPageChange={(event) => onChangePage(event.selected+1)}// в эвенте хра-ся селектед когда выбираю страницу воз-ся индекс
      pageRangeDisplayed={4} //на каждую стр вывожу по 8 книг
      pageCount={3} //ко-во страниц
      forcePage={currentPage-1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
