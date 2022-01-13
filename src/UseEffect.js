import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function UseEffect(){
    const [data, setData] = useState("");
    const [condition, setCondition] = useState(true);

    function toggleState(){
        setCondition(!condition);
      }

    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get("https://api.quotable.io/random");
            console.log("API was called");
            setData(response.data.author);
        }
        fetchData();
    }, [condition]); //useEffect re-render when a state is changed

    return (
        <div>
            <div>
                {data}
            </div>   
            <div>
                <button className="btn-primary" onClick={toggleState}>Change Author</button>
            </div>
        </div>
        
    );
}