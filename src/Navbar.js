import { Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (

    <BrowserRouter>
    <nav className="navbar">
      <h1>Party Planner</h1>
      <div className="links">
        <Link to="./App">Home</Link>
        <Link to="./Create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Create</Link>
      </div>
    </nav>
    </BrowserRouter>
  );
}
 
export default Navbar;