import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <div className="flex">
        <input
          className="border rounded-l py-2 px-4 w-4/5"
          type="text"
          value={newTask}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="mt-4">
        {todoList.map((task, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-2 mb-2 flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => {
                const updatedList = [...todoList];
                updatedList.splice(index, 1);
                setTodoList(updatedList);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;






// import React from 'react';
// import { useState } from 'react';
// import './App.css';


// function App(){
// const [todoList , setTodoList] = useState([])
// const[newTask , setNewTask] = useState("")
// const handleChange = (event) => {
//   setNewTask(event.target.value);
// }
// const AddTask = () => {
//   setTodoList([...todoList,newTask]);
//   console.log(todoList);
// }
// return (
//   <div>
//     <input onChange={handleChange} />
//     <button onClick={AddTask}>Add New Task</button>
//     <div className='list'>
//       {todoList.map((task,index)=>(
//         <h1 key={index}>{task}</h1>
//       ))}
//      </div>
//   </div>
  
// );
// }
// export default App;






















//use state
// let carColor= "black";
// const [carColour, setCarcolor] = useState("black")
// return (
//   <div>
//     <button onClick={()=>{
//       setCarcolor(carColour=== "black" ? "red" : "black")
//     }}>change color</button>
//     <h1 style={{color: carColour}}>the car color is {carColour}</h1>
//   </div>
// )
// }

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