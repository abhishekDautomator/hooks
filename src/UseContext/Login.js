import React, {useContext} from 'react';
import {appContext} from './UseContext';

export default function Login(){
    const {setUserName} = useContext(appContext);

    return (<div>
        <input
            onChange={(event) => {
                setUserName(event.target.value);
            }}
        >
        </input>
    </div>);
}