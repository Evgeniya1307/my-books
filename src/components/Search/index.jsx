import React from "react";

import { SearchContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);//SearchContext из этой переменной с помощью хука useContext вытаскиваю содержимое этой переменной которая хр-ся в велью
const inputRef = React.useRef()// reactjs возьми свою логику сохрани в переменной inputRef
//focus в инпуте
const onClickClear =()=> {
  setSearchValue('')
  inputRef.current.focus()
}
 
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 32 32"
        id="Filled_Line"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <circle cx="14" cy="14" fill="#F9ED69" id="XMLID_904_" r="9" />
        <path
          d="M16,22c-4.971,0-9-4.029-9-9c0-3.111,1.578-5.852,3.977-7.469C7.496,6.774,5,10.091,5,14  c0,4.971,4.029,9,9,9c1.86,0,3.588-0.565,5.023-1.531C18.077,21.806,17.062,22,16,22z"
          fill="#BBB24F"
          id="XMLID_410_"
        />
        <path
          d="M14,5c-2.996,0-5.643,1.47-7.279,3.721C8.205,7.643,10.025,7,12,7c4.971,0,9,4.029,9,9  c0,1.975-0.643,3.795-1.721,5.279C21.53,19.643,23,16.996,23,14C23,9.029,18.971,5,14,5z"
          fill="#FBF4A5"
          id="XMLID_411_"
        />
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_899_"
          r="9"
          stroke="#200F60"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="  M15.996,8.341c1.702,0.602,3.054,1.952,3.659,3.653"
          fill="none"
          id="XMLID_417_"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_898_"
          stroke="#200F60"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
      ref={inputRef}
        value={searchValue} //зависит от переменной она изм-ся и пойдёт в велью
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />{" "}
      {/*делаю контролируемый инпут инпут value ={searchValue} теперь зависит что есть в этой переменной  */}
      {searchValue && ( //условный рендер чтобы иконка крестик поя-ся когда в инпуте чтото введенно
        <svg
          onClick={onClickClear} //при вводе в инпуте очищаются данные и фокус остается
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
