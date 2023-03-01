import { Navbar } from './Components/Navbar';
import './App.css';
import { Main } from './Components/Main';
import { ChangeTheme } from './Components/ChangeTheme';

function App() {
  return (
    <div className="App">
      <ChangeTheme />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
