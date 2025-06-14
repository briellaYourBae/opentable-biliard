import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container text-center py-5">
      <h1>Billiard Booking</h1>
      <p className="mb-4">Selamat Datang di Sistem Booking Meja Billiard 🎱</p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-success">Register</Link>
        <Link to="/about" className="btn btn-info">Tentang</Link>
      </div>
    </div>
  );
}