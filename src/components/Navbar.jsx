import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Billiard Booking</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">Booking Meja</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
