import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

/*export default function ErrorBoundary(){
  return (
    throw new Error("This is an intentional error for testing purposes");
    <section className="about-container">
      <h1>About</h1>
    </section>
  );
}*/

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or handle it in any way you prefer
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return (
        <div>
        <h1>Something went wrong, Errorboundary to the rescue 😂</h1>
        <a href="/Home"> 
              <button>Go back to Home Page 😉</button>
              </a>
      </div>
      
      
      
      )
    }
    

    // Render the children components normally
    return this.props.children;
  }
}

<div className='topButton'>
<Link to="/Home">
        <button>HOME</button>
      </Link>
      </div>

export default ErrorBoundary;