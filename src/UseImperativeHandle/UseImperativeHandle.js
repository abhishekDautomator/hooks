import React,{useRef} from 'react';
import Button from './Button';

export default function UseImperativeHandle(){ //Used to chnge the state of child class from the parent
    const buttonRef = useRef(null);
    return (<div>
        <button onClick={()=> {buttonRef.current.alterToggle()}}
        >Parent button</button>
        <Button ref={buttonRef}/>
    </div>);
}