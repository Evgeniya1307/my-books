import React from 'react'




function Categories (){
  //чтобы при клике сработал класс active создаю useStste
const[activeIndex, setActiveIndex]=React.useState(0); // буду сверять по индексу

//создаю массив для рендеринга списка
const categories=[
  'Все',
  'Приключения',
  'Про Любовь',
  'Про Дружбу',
  'Энциклопедия для Девочек',
  'Мода',
]


//со-ла фу-ию анонимную её вызов при клике заставит вызвать другую функцию (небудет перересовок)
const onClickCategory=(index)=>{
  setActiveIndex(index) 
}

    return(
      <div className="categories">
    <ul>
    {/*берётся массив преоб-ся в новый массив с помощью маппа в новый массив внутри lш передала саму строчку ,её заменила на jsx   */}
    {
      categories.map((value,i)=>(
        <li onClick={()=>onClickCategory(i)} className={activeIndex===i ? 'active' : ''}>
        {value} {/*значение*/}
        </li> 
      ))
    }
    </ul>
  </div>
  )
  }

  export default Categories;


    //<li onClick={()=>onClickCategory(0)} className={activeIndex===0 ? 'active' : ''}>Все</li>