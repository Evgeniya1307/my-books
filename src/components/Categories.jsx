import React from 'react'




function Categories ({value, onClickCategory}){
//создаю массив для рендеринга списка он статичный не меняется
const categories=[
  'Все',
  'Приключения',
  'Про Любовь',
  'Про Дружбу',
  'Энциклопедия для Девочек',
  'Мода',
]
//со-ла фу-ию анонимную её вызов при клике заставит вызвать другую функцию (небудет перересовок)
// const onClickCategory=(index)=>{
//   setActiveIndex(index) 
// }
    return(
      <div className="categories">
    <ul>
    {/*берётся массив преоб-ся в новый массив с помощью маппа в новый массив внутри lш передала саму строчку ,её заменила на jsx   */}
    {
      categories.map((categoryName,i)=>(
        <li key={i} 
        onClick={()=>onClickCategory(i)}
      className={value=== i ? 'active' : ''}> { /*activeIndex храню в value */}
        {categoryName} {/*значение*/}
        </li> 
      ))
    }
    </ul> 
  </div>
  )
  }

  export default Categories;


    //<li onClick={()=>onClickCategory(0)} className={activeIndex===0 ? 'active' : ''}>Все</li>
 //чтобы при клике сработал класс active создаю useStste
//const[activeIndex, setActiveIndex]=React.useState(0); // буду сверять по индексу