import React from 'react';
import ReactDOM from 'react-dom';
import UseState from './UseState';
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';
import UseImperativeHandle from './UseImperativeHandle/UseImperativeHandle';
import UseContext from './UseContext/UseContext';
import UseMemo from './UseMemo';
import UseCallback from './UseCallBack/UseCallBack';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseState/> */}
    {/* <UseReducer /> */}
    {/* <UseEffect /> */}
    {/* <UseRef/> */}
    {/* <UseLayoutEffect /> */}
    {/* <UseContext/> */}
    {/* <UseImperativeHandle/> */}
    {/* <UseMemo/> */}
    <UseCallback/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
