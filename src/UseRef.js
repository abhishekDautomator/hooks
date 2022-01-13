import React, {useRef} from 'react';

export default function UseRef(){
    const inputRef = useRef(null);

    function onClick(){
        inputRef.current.focus();
    };

    function clearOnClick(){
        inputRef.current.focus();
        inputRef.current.value = '';
    };

    return (<div>
        <h1 className="header">UseRef Example</h1>
        <input ref={inputRef} type="text" className="input-primary" placeholder="Type here..."></input>
        <button onClick={onClick} className="btn btn-primary">Change Name</button>
        <button onClick={clearOnClick} className="btn btn-primary">Clear</button>
    </div>
    );
}