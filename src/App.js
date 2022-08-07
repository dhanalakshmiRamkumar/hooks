import React, {useState, useEffect} from 'react';
import CounterComponent from './CounterComponent';


function App (props){
     const [render , setRender] = useState(true);
     const [counter,setCounter] = useState(0);
  

     // first param: callback functions, second param : dependency array
     useEffect(() => {
       console.log("Mounting Phase")
     }, [])

     useEffect(() => {
       console.log("Updating Phase")
     }, [counter , render])

    return(
      <div style={{padding: '15px'}}>
        <h3 className="Padded">this is {props.componentName}</h3>

         value : {counter} <br/><br/>
         <button onClick = {() => setCounter(counter + 1)}>increment</button> &nbsp;
         <button onClick = {() => setCounter(counter - 1)}>Decrement</button> &nbsp;
         <button onClick = {() => setCounter(0)}>Reset</button> &nbsp; <br/> <br/>

        <button onClick={() => setRender(!render)}> Mount/Unmount Counter</button>

        {/*render ? 
          <CounterComponent componentName={"Class Component"} intialValue={"10"} /> 
    : <></> */}
      
      </div>
    );

  
    
  
}
export default App;
