import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import { useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);

  // Ambil user dari localStorage saat pertama kali load
  useEffect(() => {
    const saved = localStorage.getItem('auth');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (role) => {
    const dummy = { name: role === 'admin' ? 'Admin' : 'User', role };
    setUser(dummy);
    localStorage.setItem('auth', JSON.stringify(dummy));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login login={login} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={user?.role === 'user' ? <Booking user={user} /> : <Navigate to="/login" />} />
      <Route path="/admin" element={user?.role === 'admin' ? <Admin logout={logout} /> : <Navigate to="/login" />} />
    </Routes>
  );
}
