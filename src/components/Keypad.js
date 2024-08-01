// Code Keypad Component Here
import React from "react"

function handleClick(e){
  console.log("Entering password...");
}

function Keypad (){
    return (
      <div>
        <input type="password" onChange={handleClick}/>
      </div>
    );
}

export default Keypad;