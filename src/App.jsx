import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import ToggleCounter from './ToggleCounter';
import Counter from './Counter';


function Home(){
  return (
    <section className="home-container">
      <nav>
        <div className='topButton'>
      <Link to="/Home">
              <button>HOME</button>
            </Link>
            </div>
        <h1>A Counter Application</h1>
        <h2>Welcome to my exam, the first button at the top left corner is the Home button, the second is the counter app page, the third button tests the error boundary, and the 4th implements a 404 error page</h2>
        <ul>
          <li>
            <Link to="/Togglecounter">
              <button>COUNTER</button>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <button>ERRORBOUNDARY</button>
            </Link>

            
          </li>
          <li>
            <Link to="/nowhere">
              <button>404 ERROR</button>
            </Link>
          </li>

        </ul>

      </nav>
    </section>
  );
}


/*function ErrorButton() {
  throw new Error;
}*/


function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
      <a href='https://altexam-ahmadutijanis-projects.vercel.app/'>

      <button>Go back to Home Page 😉</button>
      </a>

    </div>
  );
}

function About() {
  return (
    <div>
      //here is the page to test my errorboundary, I created an error by not creating a function, while calling it on my page//
      <button onClick={ErrorButton}>Click Me to Throw an Error</button>
    </div>
  );
}

 



function App(){
  return (
  <section className="main-continer">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Togglecounter" element={<ToggleCounter />}/>
      <Route path="/counter" element={<Counter />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </section>
  )
}

export default App;
