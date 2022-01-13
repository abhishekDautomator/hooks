import './App.css';
import React, { useReducer } from 'react';

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT': 
            return {counter: state.counter+1, text:state.text};
        case 'TOGGLETEXT':
            return {counter: state.counter, text:!state.text};
        default: return state;
    }
}

function UseReducer() {
//   const [counter, setCounter] = useState(0);
//   const [text, setText] = useState(true);
    const [state, dispatch] = useReducer(
        reducer, 
        {counter:0, text:"Hola"}
    );


  return (
    <div className="App">
      <div>
      {state.counter} 
     
      </div>
      <div>
        <button className="btn-primary" 
        onClick={()=> {
            dispatch({type: "INCREMENT"});
            dispatch({type:"TOGGLETEXT"})
        }}>
            Click
        </button>
      </div>
      <div>
        {state.text && <p>Hola</p>}
      </div>
    </div>
  );
}

export default UseReducer;
