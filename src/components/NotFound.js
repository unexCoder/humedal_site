import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="App">
        <div className="container-dark">
          <h2 style={{fontSize:'3.5em',margin:'0'}}>404</h2>
          <h4 style={{margin:'0',padding:'0'}}>Not Found</h4>
          <p>return to <Link to='/' className="not-found-link">homepage</Link></p>
        </div>
      </div>
    );
}

export default NotFound;