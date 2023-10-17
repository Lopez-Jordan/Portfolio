import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const currentPage = useLocation().pathname;

  return (
    <div className='navbar'>
      {(currentPage === '/') ? (
        <Link to="/" className="linkStyleOne">
          About Me
        </Link>
      ) : (
        <Link to="/" className="linkStyleTwo">
          About Me
        </Link>
      )}

      {(currentPage === '/Projects') ? (
        <Link to="/Projects" className="linkStyleOne">
          Projects
        </Link>
      ) : (
        <Link to="/Projects" className="linkStyleTwo">
          Projects
        </Link>
      )}
      {(currentPage === '/Resume') ? (
        <Link to="/Resume" className="linkStyleOne">
          Resume
        </Link>
      ) : (
        <Link to="/Resume" className="linkStyleTwo">
          Resume
        </Link>
      )}
    </div>
  );
}