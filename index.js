import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ComA from './context/comA';

const Component = () =>{
  const[value, setValue] = useState('');
  return(
    <div>
    <input type="text" value={value} onChange={(e) =>setValue(e.target.value)}/>
    <p>Input Value : {value}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
     <Component />
 );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComA />
//   </React.StrictMode>
// );
