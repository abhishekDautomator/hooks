import {useLayoutEffect, useEffect, useRef} from "react";

export default function UseLayoutEffect(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.value="Hello";
    },[]) //useEffect is called after everything is rendered into the page and shown to the user

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]); //called before everything is rendered into the page and shown to the user

    return (<div className="App">
        <input ref={inputRef} value="Abhishek"></input>
    </div>);
}