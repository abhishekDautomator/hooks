import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

export default function UseMemo(){ //In useMemo we want to access the value vs in useCallback we use to access the function
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(true);

    useEffect(()=>{
        async function fetch(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setData(response.data);
        } 
        fetch();
    },[]);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for(let i=0; i<comments.length;i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }

    console.log("Longest name : "+longestName);
    
    return longestName;
    } //this will get computed every time any other state changes like toggle. To resolve that useMemo hook is used here.

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div className="App">
            <div>{getLongestName}</div>
            <button onClick={() => {setToggle(!toggle)}
            }>
                Toggle
            </button>
            <div>{toggle && <h1>Toggle</h1>}</div>
        </div>
    )
}