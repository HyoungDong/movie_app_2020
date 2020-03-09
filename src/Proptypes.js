import React from "react";
import PropTypes from "prop-types";
const FoodILike = [ 
  {
    id:1,
    name:"kimchi",
    image:"https://img.khan.co.kr/news/2016/12/09/l_2016120901001299800104967.jpg",
    rating:5
  },
  {
    id:2,
    name:"Pork",
    image:"https://t1.daumcdn.net/liveboard/dailylife/39693914ee0842409f6977cd41339753.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"Beef",
    image:"https://img.insight.co.kr/static/2016/12/13/700/H8JDH6T1ZPLA2F51KMUO.jpg",
    rating:4.8
  }
];

function Food({ name ,picture ,rating }){
  console.log(name); 
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt ={name}/>
    </div> 
  );
}
Food.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired // isRequired 는 있어도 되고 없어도 된다. 있으면 반드시 필요한 데이터 없으면 지정된 자료형 or undefined
};
function App() {
  return (
    <div>
    {/* <Food  name = "kimchi"/>  --> children component 에 정보를 보내는 것. name 이라는 prop(property) 을 줌 */}
    {FoodILike.map(arg =><Food key ={arg.id} name ={arg.name} picture = {arg.image} rating ={arg.rating}/>)
    }
    </div>
  );
}

export default App;
