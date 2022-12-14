import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {selectSort, setSort} from "../redux/slices/filterSlice";

//массив для списка
export const sortList = [
  { name: "популярности (DESC)", sortProperty: "rating" }, //убывание
  { name: "популярности (ASC)", sortProperty: "-rating" }, //возрастание
  { name: "цене (DESC)", sortProperty: "price" },
  { name: "цене (ASC)", sortProperty: "-price" },
  { name: "алфавиту (DESC)", sortProperty: "title" },
  { name: "алфавиту (ASC)", sortProperty: "-title" },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort); //вытаскиваю из редакса  объект св-ва сорт
  const sortRef = React.useRef();//ссылка на дом элемент при скрытии сортировки
  const [open, setOpen] = React.useState(false); // блок скрыт это будет как со светом включен выключен
  

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));// вернёт объект
    setOpen(false); // далее скройся там где сортировка
  };

  //при первом рендере по ссылке проверяю был ли клик
  React.useEffect(()=>{
const handleClickQutside = (event)=> {  // храню ссылку внутри этой переменной
  if(sortRef.current && !event.path.includes(sortRef.current)){
    setOpen(false)
  }
}
document.body.addEventListener('clicl',handleClickQutside); //  document.body.addEventListener("click", делает клик то передай ниже фу-ию
return()=>document.body.removeEventListener('clicl',handleClickQutside);//если компонент уд-ся со стр то удаляю обработчик события с body на клик, т,е было размонтирование и вызови эту фу-ию
  }, []);

  return (
    <div ref={sortRef} className="sort">{/*ссылка на дом элемент */}
      <div className="sort__label">
        {/*сортировка по */}
      <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>{" "}
        {/*value заменила на sort */}
      </div>
      {/*чтобы этот блок отобразился если open try */}
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)} //передаю целый объект
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              > 
                {" "}
                {/*проверка что выбрала по популярности т,е то что у родителя хранится value c тем что рендерю */}
                {obj.name}
                {/*рендерю obj.name*/}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
