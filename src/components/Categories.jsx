import React from 'react'




function Categories (){
  //чтобы при клике сработал класс active создаю useStste

    return(
      <div className="categories">
    <ul>
      <li className="active">Все</li>
      <li>Приключения</li>
      <li>Про Любовь</li>
      <li>Про Дружбу</li>
      <li>Энциклопедия для девочек</li>
      <li>Мода</li>
    </ul>
  </div>
  )
  }

  export default Categories;