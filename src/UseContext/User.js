import React, {useContext} from 'react';
import {appContext} from './UseContext';

export default function User(){
    const {username} = useContext(appContext);
    return (<div>
        <h1>User: {username}</h1>
    </div>)
} 