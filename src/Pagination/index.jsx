import React from "react";
import ReactPaginate from "react-paginate";


import styles from ".//Pagination.module.scss";

const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">" //стрелки назад вперёд
      onPageChange={(event) => console.log(event)}
      pageRangeDisplayed={8} //на каждую стр вывожу по 8 книг
      pageCount={3} //ко-во страниц
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
