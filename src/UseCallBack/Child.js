import React, {useEffect} from 'react';

export default function Child({comment}){
    useEffect(() =>{
        console.log("function was called")
    },[comment]);

    return <div>{comment("Abhishek")}</div>; //Can't do this through useMemo as we can't use the function using useMemo
}