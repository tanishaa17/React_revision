import "./App.css";
// import Timer from "./Components/Timer";
import ToggleTimer from "./Components/ToggleTimer";

export default function App() {
  return (
    <>
      <h2 style={{textAlign:"center"}}>CountDown App</h2>
      <div className="App">
        {
          <>
            <ToggleTimer />
          </>
        }
      </div>
    </>
  );
}
