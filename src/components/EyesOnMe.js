// Code EyesOnMe Component Here
import React from "react";

function handleOnblur(e){
    console.log("Hey! Eyes on me!");
}

function handleOnFocus(e){
    console.log("Good!");
}

function EyesOnMe(){
    return (
      <div>
        <button
        onBlur={handleOnblur}
        onFocus={handleOnFocus}
        >Eyes on me</button>
      </div>
    );
}

export default EyesOnMe