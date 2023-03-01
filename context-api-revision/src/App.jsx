import { Navbar } from './Components/Navbar';
import './App.css';
import { Main } from './Components/Main';
import { ChangeTheme } from './Components/ChangeTheme';
import { useContext } from 'react';
import { ThemeContext } from './ContextProvider/ThemeContextProvider';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    < div className="App" style={{
      background: theme === "light" ? "beige" : "black",
      color: theme === "light" ? "black" : "white"

    }}>
      <Navbar />
      <ChangeTheme onClick={toggleTheme} btntxt={"Change Theme"} />
      <Main />
    </div >
  );
}

export default App;
