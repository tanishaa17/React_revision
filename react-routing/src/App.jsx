import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Routes/About';
import { Contacts } from './Routes/Contacts';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Users } from './Routes/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<Contacts />} />
        <Route path='/about' element={<Login />} />
        <Route path='/about' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
