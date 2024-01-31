import React from 'react';
import './App.css';

function App() {

  const handleClickFunction = (e) =>{
     const body = document.querySelector("body");
     const heading1 = document.querySelector("h1");
     heading1.style.color = getRandomColor();
     body.style.background = getRandomColor();
  }

  const getRandomColor = () => {
    let letters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let hashSign = "#";

    for (let i = 0; i < 6; i++) {
      hashSign += letters[Math.floor(Math.random() * 16)];
    }
    return hashSign;
  }

  return (
    <>
      <div className="container">
        <h1 className='heading'>Background Color Changer App</h1>
        <button className='btn' onClick={handleClickFunction}>Click to Change</button>
      </div>
    </>

  );
}

export default App;
