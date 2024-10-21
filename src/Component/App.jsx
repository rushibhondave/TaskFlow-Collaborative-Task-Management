
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../Page/Login&Register/Register';
import Login from '../Page/Login&Register/Login';
import AuthForm from '../Page/Login&Register/LoginandRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AuthForm" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
