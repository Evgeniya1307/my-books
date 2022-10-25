import React from "react";
import {useParams } from "react-router";
//инфа пиццы
const FullBooks = () => {
    const{id} = useParams();//возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены <Route path>

    //запрос по id книг 
    React.useEffect(()=>{

    },[])

    return (
    <div className="container">
      <img src="" />
      <h2>{id}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pellentesque tincidunt interdum.
      </p>
      <h4>250 $</h4>
    </div>
  );
};

export default FullBooks;
