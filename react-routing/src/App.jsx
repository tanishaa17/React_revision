import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Routes/About';
import { Contacts } from './Routes/Contacts';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Users } from './Routes/Users';

function App() {
  return (
    <div className="App">

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", fontWeight: "bolder", fontSize: "30px" }}>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
        <Link to="/user">Users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
