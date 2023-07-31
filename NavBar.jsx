import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <section id="navlinks">
        <Link to="/" className="homeL">
          Home
        </Link>
        <Link to="/blue" className="blueL">
          Blue
        </Link>
        <Link to="/red" className="redL">
          Red
        </Link>
        <Link to="/doggy" className="doggyL">
          Go to Doggy
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
