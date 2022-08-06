import "./intro.scss";
import  {init}  from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"]
    });
  }, []);
  return (
    <div  className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/maan2.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
            <h2>Merhaba Ben</h2>
            <h1>Burak FİLİZ</h1>
            <h3>Freelance <span ref={textRef}></span></h3>


        </div>

        
      </div>

    </div>
  )
}