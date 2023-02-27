import "./App.css";
import GetPost from "./Components/GetPost";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Post the data using UseEffect</h1>
        <hr />
      </div>
      <div id="posts">
        <GetPost />
      </div>
    </>
  );
}
