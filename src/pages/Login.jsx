import { useNavigate } from 'react-router-dom';

export default function Login({ login }) {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(role === 'admin' ? '/admin' : '/booking');
  };

  return (
    <div className="container py-5 text-center">
      <h2>Login Sebagai</h2>
      <button className="btn btn-primary m-2" onClick={() => handleLogin('user')}>Customer</button>
      <button className="btn btn-secondary m-2" onClick={() => handleLogin('admin')}>Admin</button>
    </div>
  );
}