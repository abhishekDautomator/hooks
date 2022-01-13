import React,{useState, createContext} from 'react';
import Login from './Login';
import User from './User';

export const appContext = createContext(null);

export default function UseContext(){
    const [username, setUserName] = useState("");

    return (
        <appContext.Provider value={{username, setUserName}} >
            <Login />
            <User />
        </appContext.Provider>
    );
}

