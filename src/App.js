import React from 'react';
import { useState } from 'react';
import './App.css';


function App(){
// let carColor= "black";
const [carColour, setCarcolor] = useState("black")
return (
  <div>
    <button onClick={()=>{
      setCarcolor(carColour=== "black" ? "red" : "black")
    }}>change color</button>
    <h1 style={{color: carColour}}>the car color is {carColour}</h1>
  </div>
)
}


export default App;









// mapping & ternary operator

// function App() {
//   const IsFar = true;
//   const Planets = [
//     { name: "mars", IsFar: true },
//     { name: "jupiter", IsFar: true },
//     { name: "moon", IsFar: false }
//   ];

//   return (
//     <div>
//       {Planets.map((planet, key) => {
//         if (planet.IsFar) return <h1 key={key}>{planet.name}</h1>;
//       })}
//     </div>
//   );
// }








// ternary operator
// function App() {
//   const age=10;
//  const isYellow = false;
//   return (
//     <div>
    
//  {age>=15 ? "eligible" :  "not eligible"}
// <h1 style={{color: isYellow ? "yellow" : "red"} }>Hello world</h1>
// {isYellow && <h1>"text is yellow"</h1> }
//   </div>
//  )
 
// }


// function App() {
//   const Users = [
//     { name: "abuzar", age: 22 } ,
//     { name: "sami", age: 24 } ,
//     {name: "tariq", age: 25 }
//   ]
//   return (
//     <div class="App" >
//       {Users.map((user ,key) => {
//         return (
//           <div key={key}>
//             <h1>name: {user.name}</h1>
//             <h1>age: {user.age}</h1>
//           </div>
//         );
//       })}</div>
//   );
// }










// day 1

// const Job = (props) => {
//   return (
//      <div> 
//       <h1>{props.salary} </h1>
//       <h1>{props.position} </h1>
//       <h1>{props.company} </h1>
//       </div>
    
//   )
// }


// function App() {
//   return (
//     <div className="App">
//      <Job salary={2000}  position="ceo" company="netflix"  />
//      <Job salary={3000}  position="c-ceo" company="oneman"  />
//      <Job salary={4000}  position="ceo-d" company="absolutions"  />
//     </div>
//   );
  


 
// }