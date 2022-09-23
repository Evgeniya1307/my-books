import React from "react";
import ReactPaginate from "react-paginate";


import styles from ".//Pagination.module.scss";

const Pagination = ({value, onChangePage}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">" //стрелки назад вперёд
      onPageChange={(event) => onChangePage(event.selected+1)}// в эвенте хра-ся селектед
      pageRangeDisplayed={4} //на каждую стр вывожу по 8 книг
      pageCount={3} //ко-во страниц
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
