import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const derementCount = () => setCount(count - 1);
  const reset = () => setCount(count- count);
  const setValue2 = () => {
    let gba = document.getElementById('input');
    setCount(parseInt(gba.value))

  };
 

  return (
    <div>
      <div className="Toggle">
      <p>{count}</p>
      <div className="up">
      <button onClick={incrementCount} >increase value</button>
      <button onClick={reset}>reset</button>
      <button onClick={derementCount} disabled ={count === 0}>decrease value</button>
      </div>
      <div className="down">
      <input type="text" id="input"></input>
      <button onClick={setValue2}>set value </button> 
      <div className="button">
      <a href="/Home"> 
              <button>Home</button>
              </a>
              </div>

      </div>
      </div>

    </div>
  );
}
