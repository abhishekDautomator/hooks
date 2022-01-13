import React, {useState, useCallback} from 'react';
import Child from './Child';

export default function UseCallBack(){ //In useMemo we want to access the value vs in useCallback we use to access the function
    const [data, setData] = useState("Hello there");
    const [toggle, setToggle] = useState(true);

    const comment = useCallback(
        (name) => {
        return data+" "+name;
    },[data]);

    return (
        <div className="App">
            <Child comment={comment}/>
            <button onClick={
                ()=>{setToggle(!toggle);}}
            >Toggle</button>
            {toggle && <h3>Toggle</h3>}
        </div>
    );
}