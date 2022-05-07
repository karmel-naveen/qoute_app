import React, { Component, useEffect, useState } from "react";

import './App.css';
function App() {
    const [advice,setAdvice] = useState("")
    const url = "https://api.adviceslip.com/advice";
        const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setAdvice(json.slip.advice)
        } catch (error) {
            console.log("error", error);
        }
        };
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchData}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
}

export default App;