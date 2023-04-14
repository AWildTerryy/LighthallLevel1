import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


function TrackButton(){
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);

  function handleClick(){
    setCount(count + 1);
  }

  useEffect(() =>{
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  
  return(
    <button onClick={handleClick}>
      Clicked {count} times!
    </button>
  )
}

function ButtonApp(){
  return(
    <div className="App">
      <header className="App-header">
        <h1>Chasing the Clicks</h1>
        <TrackButton />
      </header>  
    </div>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonApp />
  </React.StrictMode>
);