import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { About } from './Routes/About';
import { Contacts } from './Routes/Contacts';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Users } from './Routes/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
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