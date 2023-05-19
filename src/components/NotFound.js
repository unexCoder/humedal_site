import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="App">
        <div className="container-dark">
          <h2>404</h2>
          <h4 style={{margin:'0',padding:'0'}}>Page Not Found</h4>
          <p>return to <Link to='/'>homepage</Link></p>
        </div>
      </div>
    );
}

export default NotFound;