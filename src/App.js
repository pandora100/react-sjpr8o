import React,{useEffect, useRef, useState} from "react";
import "./style.css";
//
export default function App() {
   const [hidden,setHidden]= useState(false);
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const moreRef = useRef(null);

  useEffect(() => {
        // *** After render, don't do anything, just remember we've seen the render
        if (hidden && moreRef.current) {
            console.log("hidden false");
            moreRef.current.className = "escondido";
        } else if(!hidden && moreRef.current) {
            console.log("hidden true");
            moreRef.current.className = "aparecido";
        }
    }, [hidden]);
  const onclick = () => { 
  setHidden(!hidden);
};



  return (
    <React.Fragment>
    <button ref={buttonRef} onClick={onclick}>
    <span ref={buttonTextRef}>Show More</span>
    <i  className="fas fa-caret-down"></i>
  </button>

  <p ref={moreRef}>
      MORE
  </p>
  </React.Fragment>
  );
}
