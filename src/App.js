
import './App.css';

const Job = (props) => {
  return (
     <div> 
      <h1>{props.salary} </h1>
      <h1>{props.position} </h1>
      <h1>{props.company} </h1>
      </div>
    
  )
}


function App() {
  return (
    <div className="App">
     <Job salary={2000}  position="ceo" company="netflix"  />
     <Job salary={3000}  position="c-ceo" company="oneman"  />
     <Job salary={4000}  position="ceo-d" company="absolutions"  />
    </div>
  );
  


 
}

export default App;
